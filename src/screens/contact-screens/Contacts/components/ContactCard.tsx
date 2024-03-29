import * as Linking from "expo-linking";
import React from "react";
import { Dimensions, Share, StyleSheet } from "react-native";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import Icon from "../../../../components/Icon";
import { Spacing } from "../../../../styled/spacing";
import { Text } from "../../../../styled/typography";
import colors from "../../../../themes/colors";

interface CProps extends Pick<PanGestureHandlerProps, "simultaneousHandler"> {
    avatar?: string;
    name?: string;
    phone?: string;
    simultaneousHandler: any;
    onDismiss?: () => void;
}

const width = Dimensions.get("window").width;

const CARD_HEIGHT = 60;
const DELETE_THRESHOLD = -width * 0.4;

const ContactCard = ({
    avatar,
    name,
    phone,
    simultaneousHandler,
    onDismiss,
}: CProps) => {
    const handleCall = () => {
        Linking.openURL(`tel:${phone}`);
    };

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: `${name} - ${phone}`,
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
    const cardHeight = useSharedValue(CARD_HEIGHT);
    const cardOpacity = useSharedValue(1);

    const handleDelete = () => {
        "worklet";
        translateX.value = withTiming(-width);
        cardHeight.value = withTiming(0);
        cardOpacity.value = withTiming(0, undefined, (isFinished) => {
            if (isFinished && onDismiss) {
                runOnJS(onDismiss)();
            }
        });
    };

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
        {
            onActive: (event) => {
                translateX.value = event.translationX;
            },
            onEnd: (event) => {
                const shouldBeDismissed = translateX.value < DELETE_THRESHOLD;
                if (translateX.value <= -70) {
                    translateX.value = withTiming(-60);
                } else if (translateX.value >= -60) {
                    translateX.value = withTiming(0);
                }
                if (shouldBeDismissed) {
                    handleDelete();
                }
            },
        }
    );

    const rStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const containerStyle = useAnimatedStyle(() => {
        return {
            height: cardHeight.value,
            opacity: cardOpacity.value,
        };
    });

    const iconStyle = useAnimatedStyle(() => {
        const opacity = withTiming(translateX.value <= -60 ? 1 : 0);
        return {
            opacity,
        };
    });

    return (
        <Animated.View style={[styles.listItem, containerStyle]}>
            <PanGestureHandler
                simultaneousHandlers={simultaneousHandler}
                onGestureEvent={panGesture}
            >
                <Animated.View style={rStyle}>
                    <HStack py={14}>
                        <Content>
                            <Avatar source={{ uri: avatar }} />
                            <Text ml={16} fontSize={14}>
                                {name}
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
            <Animated.View style={[styles.iconContainer, iconStyle]}>
                <Icon
                    onPress={handleDelete}
                    name="bin"
                    size={24}
                    color={"white"}
                />
            </Animated.View>
        </Animated.View>
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
        overflow: "hidden",
    },
});

export default React.memo(ContactCard);
