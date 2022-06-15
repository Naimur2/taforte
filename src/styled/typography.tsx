import styled, { css } from "styled-components/native";
import { TProps } from "../interfaces/styles-interface";
import colors from "../themes/colors";
import fonts from "../themes/fonts";
import { Spacing } from "./spacing";

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
    font-size: ${(props) => `${props.fontSize}` || "14"}px;
    color: ${(props) => props.color || colors.secondary};
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
        getFontFamily(props.fontFamily || "Inter", props.fontWeight || 400)};
`;
