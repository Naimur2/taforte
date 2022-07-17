import React from "react";
import Screen from "../../../components/Screen";
import QRCode, { QRCodeProps } from "react-native-qrcode-svg";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { ScrollView } from "react-native";
import * as Sharing from "expo-sharing";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import Button from "../../../components/Button";
const qrLogo = require("../../../../assets/images/qr-logo.png");

const RecomendToFriends = () => {
    const [permissions, requestPermission] = MediaLibrary.usePermissions();

    const qrRef = React.useRef<QRCodeProps>(null);

    const qrCodeData: {
        [key: string]: string;
    } = {
        googlePlay: "https://play.google.com",
        appStore: "https://itunes.apple.com",
        website: "https://www.google.com",
    };

    React.useEffect(() => {
        if (!permissions?.granted) {
            requestPermission();
        }
    }, []);

    const getDataURL = (): Promise<string | Error> => {
        return new Promise((resolve, reject) => {
            qrRef.current?.toDataURL((dataURL: string) => {
                resolve(dataURL);
            });
        });
    };

    const handleShareQr = async () => {
        try {
            const dataURL = await getDataURL();

            const filePath =
                FileSystem.cacheDirectory +
                "taforte-qr" +
                Date.now().toString() +
                ".png";

            await FileSystem.writeAsStringAsync(filePath, dataURL, {
                encoding: FileSystem.EncodingType.Base64,
            });

            await MediaLibrary.saveToLibraryAsync(filePath);

            await Sharing.shareAsync(filePath);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                }}
            >
                <Center mt="100">
                    <QRCode
                        value={JSON.stringify(qrCodeData)}
                        size={200}
                        logo={qrLogo}
                        logoSize={50}
                        getRef={qrRef}
                    />
                    <Text
                        fontWeight={600}
                        fontSize={36}
                        textTransform="uppercase"
                        mt={30}
                    >
                        TAFORTE
                    </Text>

                    <Text
                        fontWeight={500}
                        fontSize={14}
                        mt={10}
                        textAlign="center"
                        color="#909090"
                    >
                        Scan the code to install TAFORTE app
                    </Text>

                    <HR mt="40%" />
                    <Button text="Share to friends" onPress={handleShareQr} />
                </Center>
            </ScrollView>
        </Screen>
    );
};

const Center = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    ${Spacing}
`;

const HR = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${colors.primary};
    margin-top: 20px;
    margin-bottom: 20px;
    ${Spacing}
`;

export default RecomendToFriends;
