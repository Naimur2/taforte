import React from "react";
import { StyleSheet, View } from "react-native";
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

export const Collapseable = () => {
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    const aniRef = useAnimatedRef<View>();

    const open = useSharedValue(false);

    const collapsHeight = useSharedValue(0);

    const progress = useDerivedValue(() =>
        open.value ? withSpring(1) : withTiming(0)
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

    const collapsStyle = useAnimatedStyle(() => {
        return {
            height: collapsHeight.value * progress.value + 1,
        };
    }, []);

    const getMeasure = () => {
        "worklet";
        const m = measure(aniRef);
        collapsHeight.value = m.height;
    };

    const handlePress = () => {
        if (collapsHeight.value === 0) {
            runOnUI(getMeasure)();
        }

        open.value = !open.value;
    };

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
            <Animated.View style={[styles.collapse, collapsStyle]}>
                <View ref={aniRef} style={[styles.colapseBody]}>
                    <Text lineHeight={20} color={colors.gray300}>
                        Lorem Ipsum is simply dummy text of the print and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown Lorem Ipsum is simply dummy text of the
                        print and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown
                    </Text>
                </View>
            </Animated.View>
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
