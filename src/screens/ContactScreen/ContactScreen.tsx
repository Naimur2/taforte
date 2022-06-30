import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import styled from "styled-components/native";
import Icon from "../../components/Icon";
import Screen from "../../components/Screen";
import { SpacingProps } from "../../interfaces";
import { Spacing } from "../../styled/spacing";
import colors from "../../themes/colors";
import ContactCard from "./components/ContactCard";
import Search from "./components/Search";
import { useNavigation } from "@react-navigation/native";

export default function ContactScreen() {
    const contacts = [
        {
            _id: 1,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 2,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 3,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 4,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 5,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 6,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 7,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 8,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 9,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 10,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John Doe",
            phone: "123456789",
        },
        {
            _id: 11,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John c",
            phone: "123456789",
        },
        {
            _id: 12,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John d",
            phone: "123456789",
        },
        {
            _id: 13,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John c",
            phone: "123456789",
        },
        {
            _id: 14,
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: "John d",
            phone: "123456789",
        },
    ];
    const scrollRef = React.useRef(null);
    const navigation = useNavigation();

    const handleDissmiss = React.useCallback((_id: string) => {
        console.log("dissmiss", _id);
    }, []);

    return (
        <Screen title={"Contats"} leftIcon={false}>
            <Box>
                <Search mx={16} mt={40} />
                <ScrollView
                    ref={scrollRef}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Inner>
                        {contacts.map((contact, index) => (
                            <ContactCard
                                key={index}
                                avatar={contact.avatar}
                                name={contact.name}
                                phone={contact.phone}
                                simultaneousHandler={scrollRef}
                                onDismiss={() => console.log("dissmiss")}
                            />
                        ))}
                    </Inner>
                </ScrollView>
            </Box>
            <Fab onPress={() => navigation.navigate("AddContacts")}>
                <Icon
                    mx="auto"
                    my={"auto"}
                    name="add-user"
                    size={24}
                    color="#fff"
                />
            </Fab>
        </Screen>
    );
}

const Box = styled.View<SpacingProps>`
    flex: 1;
    height: 80%;
    ${Spacing}
`;

const Inner = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 160px;
`;

const Fab = styled.TouchableOpacity`
    position: absolute;
    bottom: 100px;
    right: 16px;
    width: 50px;
    height: 50px;
    border-radius: 16px;
    background-color: ${colors.primary};
`;
