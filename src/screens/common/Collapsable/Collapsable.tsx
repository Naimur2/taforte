import React from "react";
import { StyleSheet, View, LayoutChangeEvent } from "react-native";
import Animated, {
    concat,
    interpolate,
    measure,
    runOnUI,
    useAnimatedRef,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import Icon from "../../../components/Icon";
import { ICollapsibleProps } from "../../../interfaces/index";

export const Collapseable = (props: ICollapsibleProps) => {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    const [isExpanded, setIsExpanded] = React.useState(false);

    const progress = useDerivedValue(() =>
        isExpanded ? withSpring(1) : withTiming(0)
    );

    const arrowStyle = useAnimatedStyle(() => {
        const rotateValue = interpolate(progress.value, [0, 1], [0, 90]);
        return {
            transform: [
                {
                    rotateZ: rotateValue + "deg",
                },
            ],
        };
    }, []);

    const handlePress = () => {
        setIsExpanded((prev) => !prev);
    };

    // logic is here

    // if height is freater than 200, height is 0
    // if height is less than 200, height is 200

    return (
        <CollContainer mb={16}>
            <CollHeader onPress={handlePress}>
                <TitleBox>
                    {props.title && (
                        <Text fontWeight={600} fontSize={14}>
                            {props.title}
                        </Text>
                    )}
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

            {isExpanded && (
                <Animated.View style={[styles.collapse]}>
                    <View style={[styles.colapseBody]}>
                        {props.text && (
                            <Text lineHeight={20} color={colors.gray300}>
                                {props.text}
                            </Text>
                        )}
                    </View>
                </Animated.View>
            )}
        </CollContainer>
    );
};

const CollContainer = styled.View`
    border: 1px solid ${colors.light200};
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
    padding: 16px;
`;

const styles = StyleSheet.create({
    collapse: {
        overflow: "hidden",
    },
    colapseBody: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});
