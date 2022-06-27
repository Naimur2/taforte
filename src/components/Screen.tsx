import React from "react";
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
    return (
        <Background>
            {!noHeader && <Header leftIcon={leftIcon} title={title} />}
            <Container
                mt={noHeader ? 70 : 0}
                flex={!noHeader ? 0.94 : 1}
                {...rest}
            >
                {children}
            </Container>
        </Background>
    );
};

export default Screen;
