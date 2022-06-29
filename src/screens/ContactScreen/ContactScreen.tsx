import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import styled from "styled-components/native";
import Screen from "../../components/Screen";
import { SpacingProps } from "../../interfaces";
import { Spacing } from "../../styled/spacing";
import ContactCard from "./components/ContactCard";
import Search from "./components/Search";

export default function ContactScreen() {
    const contacts = [
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
    ];

    return (
        <Screen title={"Contats"} leftIcon={false}>
            <Box pt={16} px={16}>
                <Search my={8} />
                <ScrollView>
                    {contacts.map((contact, index) => (
                        <ContactCard
                            key={index}
                            avatar={contact.avarar}
                            name={contact.name}
                            phone={contact.phone}
                        />
                    ))}
                </ScrollView>
            </Box>
        </Screen>
    );
}

const Box = styled.View<SpacingProps>`
    ${Spacing}
`;
