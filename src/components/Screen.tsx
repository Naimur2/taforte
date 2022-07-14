import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import usePlatform from "../hooks/use-platform";
import { SpacingProps } from "../interfaces";
import { Container } from "../styled/structures";
import Background from "./Background";
import Header from "./Header";

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
    const os = usePlatform();

    const mt = os === "android" ? 0 : 30;

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "#fff" }}
            edges={["bottom"]}
        >
            <Background>
                {!noHeader && <Header leftIcon={leftIcon} title={title} />}
                <Container
                    mt={noHeader ? "20%" : mt}
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
