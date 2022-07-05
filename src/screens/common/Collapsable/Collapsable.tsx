import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    concat,
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import Icon from "../../../components/Icon";

export const Collapseable = () => {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    const aniRef = useAnimatedRef();

    const arrowRotation = useSharedValue(0);
    const collapsHeight = useSharedValue(0);

    const arrowStyle = useAnimatedStyle(() => {
        const rotateValue = arrowRotation.value + "deg";
        return {
            transform: [
                {
                    rotate: rotateValue,
                },
            ],
        };
    }, []);

    const collapsStyle = useAnimatedStyle(() => {
        const heightValue = arrowRotation.value;
        return {
            height: heightValue,
        };
    }, []);

    const handlePress = () => {
        "worklet";
        arrowRotation.value =
            arrowRotation.value === 0 ? withTiming(90) : withTiming(0);
        collapsHeight.value =
            collapsHeight.value === 0 ? withTiming(100) : withTiming(0);
    };

    React.useEffect(() => {
        const getMeasure = async () => {
            await aniRef.current.measure(
                (x, y, width, height, pageX, pageY) => {
                    console.log(height);
                    collapsHeight.value = height;
                }
            );
        };
        getMeasure();
    }, []);

    return (
        <CollContainer mb={16}>
            <CollHeader onPress={handlePress}>
                <TitleBox>
                    <Text fontWeight={600} fontSize={14}>
                        How to save jpg camera roll?
                    </Text>
                </TitleBox>
                <IconBox>
                    <AnimatedIcon
                        name="chevron-right"
                        size={16}
                        color={colors.gray200}
                        style={arrowStyle}
                    />
                </IconBox>
            </CollHeader>
            <Animated.View ref={aniRef} style={[styles.collapse, collapsStyle]}>
                <Text pt={16} lineHeight={20} color={colors.gray300}>
                    Lorem Ipsum is simply dummy text of the print and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                </Text>
            </Animated.View>
        </CollContainer>
    );
};

const CollContainer = styled.View`
    border: 1px solid ${colors.light200};
    padding: 16px;
    border-radius: 10px;
    ${Spacing}
`;

const TitleBox = styled.View`
    width: 96%;
`;

const IconBox = styled.View`
    width: 4%;
`;

const CollHeader = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${Spacing}
`;

const styles = StyleSheet.create({
    collapse: {
        overflow: "hidden",
    },
});
