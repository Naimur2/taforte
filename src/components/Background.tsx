import React from "react";
import styled from "styled-components/native";
const homeBg = require("./../../assets/images/home-bg.png");

interface ImageBackgroundProps {
    children: React.ReactNode;
}

export default function Background({ children }: ImageBackgroundProps) {
    return <ImageBackground source={homeBg}>{children}</ImageBackground>;
}

const ImageBackground = styled.ImageBackground`
    flex: 1;
`;
