import styled, { css } from "styled-components/native";
import fonts from "../themes/fonts";

interface TProps {
    fontFamily?: string;
    fontWeight?: string | number;
    fontSize?: number;
    fontStyle?: string;
    color?: string;
    textAlign?: string;
    textDecoration?: string;
    textTransform?: string;
    lineHeight?: number;
    letterSpacing?: number;
}

const getFontFamily = (
    fontFamily: string,
    fontWeight: number | string | undefined
) => {
    if (fontFamily && fontWeight) {
        return fonts[fontFamily][fontWeight];
    }
    if (fontFamily && !fontWeight) {
        return fonts.Inter[400];
    }
    return fonts.Inter[400];
};

export const Text = styled.Text<TProps>`
    font-style: ${(props) => props.fontStyle || "normal"};
    color: ${(props) => props.color || "#000"};
    text-align: ${(props) => props.textAlign || "left"};
    text-decoration: ${(props) => props.textDecoration || "none"};
    text-transform: ${(props) => props.textTransform || "none"};
    line-height: ${(props) => props.lineHeight || "15px"};
    letter-spacing: ${(props) => props.letterSpacing || 0};
    font-family: ${(props) =>
        getFontFamily(props.fontFamily || "Inter", props.fontWeight)};
`;
