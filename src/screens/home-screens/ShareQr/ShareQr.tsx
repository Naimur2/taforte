import React from "react";
import Screen from "../../../components/Screen";
import { useRoute } from "@react-navigation/native";
import QRCode, { QRCodeProps } from "react-native-qrcode-svg";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import Icon from "../../../components/Icon";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import Button from "../../../components/Button";
import { ScrollView, Share } from "react-native";
import * as Sharing from "expo-sharing";

const qrLogo = require("../../../../assets/images/qr-logo.png");
interface IQrCodeData {
    frontImage: string;
    backImage: string;
    group: string;
    userId: string;
    cardId: string;
}

const ShareQr = () => {
    const [permissions, requestPermission] = MediaLibrary.usePermissions();

    const qrRef = React.useRef<QRCodeProps>(null);

    const params = useRoute().params as any;

    const qrCodeData: IQrCodeData = {
        userId: params?.data?.userId,
        cardId: params?.data?.cardId,
    };

    const getDataURL = (): Promise<string | Error> => {
        return new Promise((resolve, reject) => {
            qrRef.current?.toDataURL((dataURL: string) => {
                resolve(dataURL);
            });
        });
    };

    React.useEffect(() => {
        if (!permissions?.granted) {
            requestPermission();
        }
    }, []);

    const handleSetImage = async () => {
        try {
            const dataURL = await getDataURL();

            let fileName = `${params?.data?.title}-${
                qrCodeData.cardId
            }-${Date.now().toString()}.png`;

            fileName = fileName.trim().split(" ").join("").toLowerCase();

            const filePath = FileSystem.cacheDirectory + fileName;

            await FileSystem.writeAsStringAsync(filePath, dataURL, {
                encoding: FileSystem.EncodingType.Base64,
            });

            await MediaLibrary.saveToLibraryAsync(filePath);

            await Sharing.shareAsync(filePath);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSave = async () => {
        try {
            const base64 = await getDataURL();

            let fileName = `${params?.data?.title}-${
                qrCodeData.cardId
            }-${Date.now().toString()}.png`;

            fileName = fileName.trim().split(" ").join("").toLowerCase();

            const filePath = FileSystem.cacheDirectory + fileName;

            if (filePath && permissions?.granted) {
                await FileSystem.writeAsStringAsync(filePath, base64, {
                    encoding: FileSystem.EncodingType.Base64,
                });
                await MediaLibrary.saveToLibraryAsync(filePath);
                alert("Qr code saved to gallery");
            }
        } catch (error) {
            alert("Error saving QR Code");
            console.log(error);
        }
    };

    return (
        <Screen>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 16,
                }}
            >
                <Center mt={100}>
                    <QRCode
                        value={JSON.stringify(qrCodeData)}
                        size={250}
                        logo={qrLogo}
                        logoSize={50}
                        getRef={qrRef}
                    />
                    <Text
                        color={colors.gray500}
                        mt={25}
                        fontSize={14}
                        maxWidth={200}
                        textAlign="center"
                    >
                        Scan the QR code above to easily save the cards.
                    </Text>
                    <ShareIcon mt={50} onPress={handleSetImage}>
                        <Icon
                            mb={16}
                            name="share"
                            size={40}
                            color={colors.green100}
                        />
                        <Text>Share Qr Code</Text>
                    </ShareIcon>

                    <Button mt={50} text="Save Qr Code" onPress={handleSave} />
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
const ShareIcon = styled.Pressable`
    display: flex;
    align-items: center;
    ${Spacing}
`;

const Image = styled.Image`
    height: 100px;
    width: 100px;
`;

export default ShareQr;
