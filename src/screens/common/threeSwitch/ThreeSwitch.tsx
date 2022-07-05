import React from "react";
import { LayoutChangeEvent, StyleSheet } from "react-native";
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
} from "react-native-reanimated";
import styled from "styled-components/native";
import colors from "../../../themes/colors";
import SwitchButton from "./coponents/SwitchButton";

interface ThreeSwitchProps {
    onPress?: (current: string | number) => void;
}

const ThreeSwitch = ({ onPress }: ThreeSwitchProps) => {
    const switchWidth = React.useRef(0);
    const containerWidth = React.useRef(0);
    const [swiitchPos, setSwitchPos] = React.useState(1);

    const switchPosition = useDerivedValue(() => {
        "worklet";
        switch (swiitchPos) {
            case 1:
                return withTiming(0, undefined, (isFinished) => {
                    if (isFinished && onPress) {
                        runOnJS(onPress)(1);
                    }
                });
            case 2:
                return withTiming(
                    containerWidth.current / 3,
                    undefined,
                    (isFinished) => {
                        if (isFinished && onPress) {
                            runOnJS(onPress)(2);
                        }
                    }
                );
            case 3:
                return withTiming(
                    containerWidth.current - switchWidth.current,
                    undefined,
                    (isFinished) => {
                        if (isFinished && onPress) {
                            runOnJS(onPress)(3);
                        }
                    }
                );
            default:
                return withTiming(0);
        }
    }, [swiitchPos]);

    const switchLayoutHandler = (e: LayoutChangeEvent) => {
        switchWidth.current = e.nativeEvent.layout.width;
    };

    const containerLayoutHandler = (e: LayoutChangeEvent) => {
        containerWidth.current = e.nativeEvent.layout.width;
    };

    const rStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: switchPosition.value }],
    }));

    const handlePress = (type: string) => {
        "worklet";
        setSwitchPos(type);
    };

    return (
        <SwitchOuterContainer>
            <SwitchInnerContainer onLayout={containerLayoutHandler}>
                <SwitchButton
                    onPress={() => handlePress(1)}
                    title="All"
                    isActive={swiitchPos === 1}
                />
                <SwitchButton
                    onPress={() => handlePress(2)}
                    title="Work"
                    isActive={swiitchPos === 2}
                />

                <SwitchButton
                    onPress={() => handlePress(3)}
                    title="Personal"
                    isActive={swiitchPos === 3}
                />

                <Animated.View
                    onLayout={switchLayoutHandler}
                    style={[styles.active, rStyle]}
                ></Animated.View>
            </SwitchInnerContainer>
        </SwitchOuterContainer>
    );
};

const SwitchOuterContainer = styled.View`
    border-width: 1px;
    border-color: ${colors.gray200}50;
    padding: 4px;
    border-radius: 8px;
`;

const SwitchInnerContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
`;

const styles = StyleSheet.create({
    active: {
        backgroundColor: colors.primary,
        width: "32%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        borderRadius: 10,
    },
});

export default ThreeSwitch;
