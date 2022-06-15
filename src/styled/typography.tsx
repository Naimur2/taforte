import styled, { css } from "styled-components/native";
import fonts from "../themes/fonts";
import { Spacing } from "./spacing";

interface TProps {
    fontFamily?: string;
    fontWeight?: string | number;
    fontSize?: number | string;
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
    ${Spacing}
    font-style: ${(props) => props.fontStyle || "normal"};
    font-size: ${(props) => `${props.fontSize}px` || "16px"};
    color: ${(props) => props.color || "#000"};
    text-align: ${(props) => props.textAlign || "left"};
    text-decoration: ${(props) => props.textDecoration || "none"};
    text-transform: ${(props) => props.textTransform || "none"};
    letter-spacing: ${(props) => props.letterSpacing || 0};
    ${(props) =>
        props.lineHeight &&
        css`
            line-height: ${props.lineHeight}px;
        `}
    }
    font-family: ${(props) =>
        getFontFamily(props.fontFamily || "Inter", props.fontWeight)};
`;
// line-height: ${(props) => `${props.lineHeight}px` || "30px"};
