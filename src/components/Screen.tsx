import React from "react";
import { SpacingProps } from "../interfaces";
import { Container } from "../styled/structures";
import Background from "./Background";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps extends SpacingProps {
    title?: string;
    leftIcon?: boolean;
    noHeader?: boolean;
    children?: React.ReactNode;
}

const Screen = ({
    title,
    leftIcon,
    children,
    noHeader,
    ...rest
}: ScreenProps) => {
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "#fff" }}
            edges={["bottom"]}
        >
            <Background>
                {!noHeader && <Header leftIcon={leftIcon} title={title} />}
                <Container
                    mt={noHeader ? "20%" : 25}
                    flex={!noHeader ? 0.94 : 1}
                    {...rest}
                >
                    {children}
                </Container>
            </Background>
        </SafeAreaView>
    );
};

export default Screen;
