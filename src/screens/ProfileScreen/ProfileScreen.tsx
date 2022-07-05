import React from "react";
import Screen from "../../components/Screen";
import styled from "styled-components/native";
import { Spacing } from "./../../styled/spacing";
import colors from "../../themes/colors";
import { ScrollView } from "react-native";
import { Text } from "../../styled/typography";
import Input from "../../components/Input";

const ProfileScreen: React.FC = () => {
    return (
        <Screen pt={30} title={"Profile"} leftIcon={false}>
            <Text px={16} pb={16} fontSize={18} fontWeight={700}>
                Profile Information
            </Text>
            <ScrollView>
                <Container px={16}>
                    <Input label="Name" placeholder="Enter Name" />
                    <Input label="Email" placeholder="Enter Mail Address" />
                    <Input
                        label="Contact Number"
                        placeholder="Enter Contact Number"
                    />
                    <Input label="Address" placeholder="Enter Address" />
                    <Input label="Password" placeholder="Enter Password" />
                </Container>
            </ScrollView>
        </Screen>
    );
};

export default ProfileScreen;

const Container = styled.View`
    ${Spacing}
`;
