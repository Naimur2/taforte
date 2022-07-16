import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import InputCard from "../InputCard/InputCard";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../themes/colors";

// data name,email,contact,address,password

const userData = {
    name: "John Doe",
    email: "woman@femail.com",
    contact: "+1325922132222",
    address: "",
    dob: "22 April, 1997",
};

const fields = [
    {
        label: "Name",
        value: userData?.name,
        navigate: "EditName",
    },
    {
        label: "Email",
        value: userData?.email,
        navigate: "EditEmail",
    },
    {
        label: "Contact",
        value: userData?.contact,
        navigate: "EditContact",
    },
    {
        label: "Address",
        value: userData?.address,
        navigate: "EditAddress",
    },
    {
        label: "Date of Birth",
        value: userData?.dob,
        navigate: "EditDOB",
    },
    {
        label: "Password",
        value: "**************",
        navigate: "EditPassword",
    },
];

const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <Screen pt={30} title={"Profile"} leftIcon={false}>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Profile mx={20} mb={20}>
                    <Avatar
                        source={{
                            uri: "https://graphonomics.net/wp-content/uploads/2019/07/Smiling-Man-4.jpg",
                        }}
                    />
                    <Text fontSize={16} fontWeight={600} mt={16} mx="auto">
                        {userData.name}
                    </Text>
                    <Text
                        color={colors.gray200}
                        fontSize={14}
                        fontWeight={400}
                        mt={6}
                        mx="auto"
                    >
                        {userData.dob}
                    </Text>
                </Profile>

                <Text px={16} pb={16} fontSize={18} fontWeight={700}>
                    Profile Information
                </Text>

                <Container px={16}>
                    {fields.map((field, index) => (
                        <InputCard
                            key={index}
                            value={field.value || "Not Added"}
                            label={field.label}
                            onEdit={() =>
                                navigation.navigate(field.navigate, {
                                    value: field.value,
                                })
                            }
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

const Profile = styled.View`
    border: 1px solid ${colors.light200};
    padding: 20px;
    border-radius: 20px;
    position: relative;

    ${Spacing}
`;

const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: 0 auto;
`;
