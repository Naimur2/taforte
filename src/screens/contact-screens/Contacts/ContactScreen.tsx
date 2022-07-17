import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import styled from "styled-components/native";
import Icon from "../../../components/Icon";
import Screen from "../../../components/Screen";
import { SpacingProps } from "../../../interfaces";
import { Spacing } from "../../../styled/spacing";
import colors from "../../../themes/colors";
import ContactCard from "./components/ContactCard";
import Search from "./components/Search";
import { useNavigation } from "@react-navigation/native";
import { getContacts, deleteContact } from "../../../../DB/contacts";

export default function ContactScreen() {
    const [contacts, setContacts] = React.useState<any[]>([]);

    const scrollRef = React.useRef(null);
    const navigation = useNavigation();

    const handleDissmiss = React.useCallback((_id: string) => {
        deleteContact(_id);
    }, []);

    React.useLayoutEffect(() => {
        setContacts(getContacts());
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
                        {contacts?.map((contact, index) => (
                            <ContactCard
                                key={index}
                                avatar={contact.avatar}
                                name={contact.name}
                                phone={contact.phone}
                                simultaneousHandler={scrollRef}
                                onDismiss={() => handleDissmiss(contact._id)}
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
