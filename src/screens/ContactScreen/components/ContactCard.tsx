import React from "react";
import styled from "styled-components/native";
import Icon from "../../../components/Icon";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import * as Linking from "expo-linking";
import { Share, View, StyleSheet } from "react-native";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

interface CProps {
    avarar?: string;
    name?: string;
    phone?: string;
}

const CARD_HEIGHT = 60;

const userData: CProps = {
    avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "John Doe",
    phone: "123456789",
};

const ContactCard: React.FC = () => {
    const handleCall = () => {
        Linking.openURL(`tel:${userData.phone}`);
    };

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: `${userData.name} - ${userData.phone}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log(result.activityType);
                } else {
                    console.log("Shared");
                }
            } else if (result.action === Share.dismissedAction) {
                console.log("Cancelled");
            }
        } catch (error) {
            alert(error.message);
        }
    };
    const translateX = useSharedValue(0);

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
        {
            onActive: (event) => {
                translateX.value = event.translationX;
                console.log(translateX.value);
            },
            onEnd: (event) => {
                translateX.value = withTiming(0);
            },
        }
    );

    const rStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <View style={styles.listItem}>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Animated.View style={rStyle}>
                    <HStack py={14}>
                        <Content>
                            <Avatar source={{ uri: userData.avarar }} />
                            <Text ml={16} fontSize={14}>
                                {userData.name}
                            </Text>
                        </Content>
                        <Content>
                            <IconsBox mr={16} onPress={handleShare}>
                                <Icon
                                    name="share"
                                    size={16}
                                    color={colors.gray100}
                                />
                            </IconsBox>
                            <IconsBox onPress={handleCall}>
                                <Icon
                                    name="telephone-fill"
                                    size={16}
                                    color={colors.gray100}
                                />
                            </IconsBox>
                        </Content>
                    </HStack>
                </Animated.View>
            </PanGestureHandler>
            <View style={styles.iconContainer}>
                <Icon name="bin" size={24} color={"white"} />
            </View>
        </View>
    );
};

const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

const Content = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const HStack = styled(Content)`
    background: white;
    justify-content: space-between;
    height: ${CARD_HEIGHT}px;
    ${Spacing}
`;

const IconsBox = styled.Pressable`
    padding: 8px;
    border-radius: 50px;
    background-color: ${colors.lightBlue300};
    ${Spacing}
`;

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: colors.gray200,
        position: "absolute",
        height: CARD_HEIGHT,
        width: CARD_HEIGHT,
        right: 0,
        zIndex: -1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    listItem: {
        position: "relative",
    },
});

export default React.memo(ContactCard);
