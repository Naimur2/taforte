import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Icon from "../../../components/Icon";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import { useNavigation } from "@react-navigation/native";

interface DrawerItemProps {
    icon: string;
    title: string;
    onPress: () => void;
}

const Item = ({ icon, title, onPress }: DrawerItemProps) => (
    <DrawerItem onPress={onPress}>
        <Icon name={icon} size={24} color={colors.primary} />
        <Text pl={16} fontSize={16} fontWeight={600} color={colors.secondary}>
            {title}
        </Text>
    </DrawerItem>
);

const DrawerItems = () => {
    const navigation = useNavigation();

    const drawerItems: DrawerItemProps[] = [
        {
            icon: "gear",
            title: "Settings",
            onPress: () => {
                console.log("Settings");
            },
        },
        {
            icon: "checks",
            title: "FAQ",
            onPress: () => {
                navigation.navigate("Faq");
            },
        },
        {
            icon: "headphone",
            title: "Help & Feedback",
            onPress: () => {
                console.log("Help & Feedback");
            },
        },
        {
            icon: "peoples",
            title: "Recommend To Friends",
            onPress: () => {
                console.log("Help & Feedback");
            },
        },
        {
            icon: "lock",
            title: "Privacy Policy",
            onPress: () => {
                console.log("Privacy Policy");
            },
        },
        {
            icon: "star",
            title: "Rate Us",
            onPress: () => {
                console.log("Rate Us");
            },
        },
    ];

    return (
        <DrawerItemsContainer>
            <View>
                {drawerItems.map((item, index) => (
                    <Item key={index.toString()} {...item} />
                ))}
            </View>
            <Item
                title="Log Out"
                icon="exit"
                onPress={() => console.log("logout")}
            />
        </DrawerItemsContainer>
    );
};

const DrawerItemsContainer = styled.View`
    flex: 0.8;
    background: #fff;
    padding: 16px 0;
    justify-content: space-between;
`;

const DrawerItem = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 16px;
`;

export default DrawerItems;
