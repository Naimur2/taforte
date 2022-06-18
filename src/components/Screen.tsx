import React from "react";
import { SpacingProps } from "../interfaces";
import { Container } from "../styled/structures";
import Background from "./Background";
import Header from "./Header";

interface ScreenProps extends SpacingProps {
    title?: string;
    leftIcon?: boolean;
    children?: React.ReactNode;
}

const Screen = ({ title, leftIcon, children, ...rest }: ScreenProps) => {
    return (
        <Background>
            <Header leftIcon={leftIcon} title={title} />
            <Container {...rest}>{children}</Container>
        </Background>
    );
};

export default Screen;
