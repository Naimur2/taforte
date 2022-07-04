import React from "react";
import Animated, {
    interpolateColor,
    useDerivedValue,
    withTiming,
    useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet, Pressable } from "react-native";
import colors from "../../../../themes/colors";

interface Switchprops {
    onPress: () => void;
    title: string;
    isActive: boolean;
}

const SwitchButton = ({ onPress, title, isActive }: Switchprops) => {
    const activeState = useDerivedValue(() => {
        return isActive ? withTiming(1) : withTiming(0);
    }, [isActive]);

    const textStyle = useAnimatedStyle(() => ({
        color: interpolateColor(
            activeState.value,
            [0, 1],
            [colors.secondary, "#fff"]
        ),
    }));

    return (
        <Pressable onPress={onPress} style={[styles.switchItem]}>
            <Animated.Text style={[textStyle]}>{title}</Animated.Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    switchItem: {
        display: "flex",
        alignItems: "center",
        padding: 12,
        width: "32%",
        borderRadius: 10,
    },
});

export default SwitchButton;
