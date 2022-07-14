import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Input from "../../../components/Input";
import Screen from "../../../components/Screen";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";

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
