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
        if (permissions && !permissions.status === "granted") {
            requestPermission();
        }
    }, []);

    const handleSave = async () => {
        try {
            const dataURL = await getDataURL();
            let fileName = `${params?.data?.title}-${
                qrCodeData.cardId
            }-${Date.now().toString()}.jpg`;
            fileName = fileName.trim().split(" ").join("").toLowerCase();

            const filePath = FileSystem.cacheDirectory + fileName;

            if (permissions?.status === "granted") {
                const res = await FileSystem.writeAsStringAsync(
                    filePath,
                    dataURL,
                    {
                        encoding: FileSystem.EncodingType.Base64,
                    }
                );
                console.log(res);

                // const mediaResult = await MediaLibrary.saveToLibraryAsync(
                //     filePath
                // );
                // console.log(mediaResult);
                alert("QR Code saved to your device");
            } else {
                alert("Permission to save QR Code is required");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Screen>
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
                <ShareIcon mt={50} onPress={handleSave}>
                    <Icon
                        mb={16}
                        name="share"
                        size={40}
                        color={colors.green100}
                    />
                    <Text>Share Qr Code</Text>
                </ShareIcon>
            </Center>
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

export default ShareQr;
