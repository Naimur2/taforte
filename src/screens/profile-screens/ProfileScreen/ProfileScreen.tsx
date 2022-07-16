import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import InputCard from "../InputCard/InputCard";

// data name,email,contact,address,password

const userData = {
    name: "John Doe",
    email: "woman@femail.com",
    contact: "+1325922132222",
    address: "",
};

const fields = [
    {
        label: "Name",
        value: userData?.name,
        navigate: "editName",
    },
    {
        label: "Email",
        value: userData?.email,
        navigate: "editEmail",
    },
    {
        label: "Contact",
        value: userData?.contact,
        navigate: "editContact",
    },
    {
        label: "Address",
        value: userData?.address,
        navigate: "editAddress",
    },
    {
        label: "Password",
        value: "**************",
        navigate: "editPassword",
    },
];

const ProfileScreen = () => {
    return (
        <Screen pt={30} title={"Profile"} leftIcon={false}>
            <Text px={16} pb={16} fontSize={18} fontWeight={700}>
                Profile Information
            </Text>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Container px={16}>
                    {fields.map((field, index) => (
                        <InputCard
                            key={index}
                            value={field.value || "Not Added"}
                            label={field.label}
                            onEdit={() => console.log("edit")}
                        />
                    ))}
                </Container>
            </ScrollView>
        </Screen>
    );
};

export default ProfileScreen;

const Container = styled.View`
    ${Spacing}
`;
