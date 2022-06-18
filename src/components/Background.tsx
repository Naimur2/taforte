import React from "react";
import styled from "styled-components/native";
import colors from "./../themes/colors";
const homeBg = require("./../../assets/images/home-bg.png");

interface ImageBackgroundProps {
    children: React.ReactNode;
}

export default function Background({ children }: ImageBackgroundProps) {
    return (
        <React.Fragment>
            <ImageBackground source={homeBg}>{children}</ImageBackground>
        </React.Fragment>
    );
}

const ImageBackground = styled.ImageBackground`
    flex: 1;
    width: 100%;
    background: ${colors.secondary};
`;
