import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Animated, {
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
} from "react-native-reanimated";
import { Spacing } from "../../../styled/spacing";
import { SpacingProps } from "../../../interfaces/index";

interface IFlipableCard extends SpacingProps {
    frontImage: string;
    backImage: string;
}

const FlipableCard = ({ frontImage, backImage }: IFlipableCard) => {
    const [side, setSide] = React.useState(0);

    const rotation = useDerivedValue(() => {
        if (side === 0) {
            return withTiming(0, {
                duration: 500,
            });
        } else {
            return withTiming(90, {
                duration: 500,
            });
        }
    }, [side]);

    const rotate1 = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateY: rotation.value + "deg",
                },
            ],
        };
    }, [side]);

    const rotate2 = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotateY: rotation.value - 90 + "deg",
                },
            ],
        };
    }, [side]);

    const setSideHandler = () => {
        "worklet";
        setSide((prev) => (prev === 0 ? 1 : 0));
    };

    return (
        <Card py={10}>
            {side === 0 ? (
                <Animated.View style={[rotate1]}>
                    <ImagContainer onPress={setSideHandler}>
                        <Image source={{ uri: frontImage }} />
                    </ImagContainer>
                </Animated.View>
            ) : (
                <Animated.View style={[rotate2]}>
                    <ImagContainer onPress={setSideHandler}>
                        <Image source={{ uri: backImage }} />
                    </ImagContainer>
                </Animated.View>
            )}
        </Card>
    );
};

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const ImagContainer = styled.Pressable`
    height: 200px;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
`;

const Card = styled.View`
    ${Spacing}
`;

export default FlipableCard;
