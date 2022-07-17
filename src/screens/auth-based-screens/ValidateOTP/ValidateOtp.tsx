import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Alert, useWindowDimensions } from "react-native";
import Button from "../../../components/Button";
import { KeyboardView } from "../../../styled";
import { Text } from "../../../styled/typography";
import styled from "styled-components/native";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import { Spacing } from "../../../styled/spacing";
import colors from "../../../themes/colors";
const otpImage = require("../../../../assets/images/otp-image.png");

interface IOtpProps {
    [key: number]: string;
}

const inputs = Array(4).fill("");
let newInputIndex = 0;

export default function ValidateOtp({}) {
    const { width } = useWindowDimensions();
    const { data } = useRoute().params;
    const navigation = useNavigation();

    const input = useRef();
    const [nextInputIndex, setNextInputIndex] = useState(0);

    const [otp, setOtp] = useState<IOtpProps>({ 0: "", 1: "", 2: "", 3: "" });

    const submitOtpHander = () => {
        const OTP = Object.values(otp).join("");

        if (OTP.length < 4) {
            Alert.alert("Invalid OTP", "Please enter a valid OTP");
            return;
        }

        console.log(OTP);
    };

    const textChangeHandler = (text, index) => {
        const newOtp = { ...otp };
        newOtp[index] = text;
        setOtp(newOtp);
        const lastInputIndex = inputs.length - 1;
        if (!text) newInputIndex = index === 0 ? 0 : index - 1;
        else
            newInputIndex =
                index === lastInputIndex ? lastInputIndex : index + 1;
        setNextInputIndex(newInputIndex);
    };

    useEffect(() => {
        input?.current?.focus?.();
    }, [nextInputIndex]);

    useEffect(() => {
        input.current.focus();
    }, []);

    return (
        <Screen>
            <KeyboardView>
                <VStack>
                    <Text fontSize="14" mt={50} mx="auto">
                        Enter the 4-digit code send to
                    </Text>
                    <Text fontSize="14" mb="4" mx="auto">
                        {`${data.email}`}
                    </Text>
                    <Image mt={40} mx={"auto"} source={otpImage} />

                    <HStack mt={20} mx={"auto"}>
                        {inputs.map((val, index) => (
                            <Box key={index.toString()}>
                                <Input
                                    maxLength={1}
                                    textAlign="center"
                                    value={otp[index]}
                                    onChangeText={(text) =>
                                        textChangeHandler(text, index)
                                    }
                                    mx="10"
                                    keyboardType="numeric"
                                    ref={
                                        nextInputIndex === index ? input : null
                                    }
                                    borderColor={
                                        otp[index] ? colors.primary : ""
                                    }
                                    bg={otp[index] ? "#E6FAF0" : ""}
                                />
                            </Box>
                        ))}
                    </HStack>

                    <Button mt="20%" onPress={submitOtpHander} text={"Submit"}>
                        Next
                    </Button>
                </VStack>
            </KeyboardView>
        </Screen>
    );
}

const VStack = styled.View`
    justify-content: space-between;
    flex: 1;
    padding: 0 16px;
`;

const HStack = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${Spacing}
`;

const Box = styled.View`
    width: 90px;
`;

const Image = styled.Image`
    width: 150px;
    height: 150px;
    ${Spacing}
`;
