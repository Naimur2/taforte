import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";

const Scan = () => {
    const navigation = useNavigation();

    const [hasPermission, setHasPermission] = React.useState(null);
    const [scanned, setScanned] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
        navigation.setOptions({
            title: "Scanning Card",
        });
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        if (type === "QR_CODE" && data.appId === "com.taforte.app") {
            setScanned(true);
            // fetch data from server and navigate to next screen
            navigation.navigate("Scanned", {
                scanned: data,
            });
        }
    };

    if (hasPermission === null) {
        return (
            <Screen>
                <Text mx={"auto"} color={colors.gray200}>
                    Requesting for camera permission
                </Text>
            </Screen>
        );
    }

    if (hasPermission === false) {
        return (
            <Screen>
                <Text mx={"auto"} color={colors.gray200}>
                    No access to camera
                </Text>
            </Screen>
        );
    }

    return (
        <Screen py={26}>
            <Text mx={"auto"} color={colors.gray200}>
                Place Qrcode inside the frame.
            </Text>
            <ScanWrapper>
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }
                    style={[StyleSheet.absoluteFillObject]}
                />
            </ScanWrapper>
        </Screen>
    );
};
const ScanWrapper = styled.View`
    flex-grow: 1;
`;
export default Scan;
