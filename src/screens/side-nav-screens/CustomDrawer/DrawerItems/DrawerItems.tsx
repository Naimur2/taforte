import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Icon from "../../../../components/Icon";
import { Text } from "../../../../styled/typography";
import colors from "../../../../themes/colors";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../../../context/AuthContext";
import { AuthContextProps } from "../../../../interfaces/context";
import Popup from "../../../common/Modal/Modal";
import { Spacing } from "../../../../styled/spacing";
const emotion = require("../../../../../assets/images/emotion.png");
import { Rating, AirbnbRating } from "react-native-ratings";

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
    const authCtx = React.useContext<AuthContextProps>(AuthContext);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [rateUs, setRateUs] = React.useState(false);

    const navigation = useNavigation();

    const drawerItems: DrawerItemProps[] = [
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
                navigation.navigate("Help");
            },
        },
        {
            icon: "peoples",
            title: "Recommend To Friends",
            onPress: () => {
                navigation.navigate("RecomendToFriends");
            },
        },
        {
            icon: "lock",
            title: "Privacy Policy",
            onPress: () => {
                navigation.navigate("Privacy");
            },
        },
        {
            icon: "star",
            title: "Rate Us",
            onPress: () => {
                setRateUs(true);
            },
        },
    ];

    return (
        <DrawerItemsContainer>
            <Popup
                title="Are You Sure Want to Sign Out?"
                isVisible={isModalVisible}
                leftButtonTitle="Cancel"
                rightButtonTitle="Logout"
                onClose={() => setIsModalVisible(false)}
                onAccept={authCtx.logout}
                _titleStyle={{
                    fontSize: 20,
                    maxWidth: 210,
                    pb: 30,
                    pt: 16,
                }}
            />

            <Popup isVisible={rateUs} onClose={() => setRateUs(false)}>
                <Image my={10} mx={"auto"} source={emotion} />
                <Text mx="auto" fontWeight={600} fontSize={24}>
                    Enjoying the App?
                </Text>
                <Text
                    my={16}
                    color="#909090"
                    mx="auto"
                    fontWeight={500}
                    fontSize={14}
                >
                    Would you mind rating us?
                </Text>
                <Rating
                    ratingCount={5}
                    imageSize={35}
                    onFinishRating={(rating) => {
                        console.log(rating);
                    }}
                    jumpValue={1}
                    startingValue={5}
                    style={{
                        marginBottom: 10,
                    }}
                />
            </Popup>

            <View>
                {drawerItems.map((item, index) => (
                    <Item key={index.toString()} {...item} />
                ))}
            </View>
            <Item
                title="Log Out"
                icon="exit"
                onPress={() => setIsModalVisible(true)}
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

const Image = styled.Image`
    ${Spacing}
`;

export default DrawerItems;
