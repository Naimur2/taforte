import { css } from "styled-components/native";
import { SpacingProps } from "../interfaces";
import { getMarginPadding } from "../helper/index";

const horizontalPadding = css`
    ${(props: SpacingProps) =>
        props.px ? `padding-left: ${getMarginPadding(props.px)}` : ""}
    ${(props: SpacingProps) =>
        props.px ? `padding-right: ${getMarginPadding(props.px)}` : ""}
`;

const verticalPadding = css`
    ${(props: SpacingProps) =>
        props.py ? `padding-top: ${getMarginPadding(props.py)}` : ""}
    ${(props: SpacingProps) =>
        props.py ? `padding-bottom: ${getMarginPadding(props.py)}` : ""}
`;

const horizontalMargin = css`
    ${(props: SpacingProps) =>
        props.mx ? `margin-left: ${getMarginPadding(props.mx)}` : ""}
    ${(props: SpacingProps) =>
        props.mx ? `margin-right: ${getMarginPadding(props.mx)}` : ""}
`;

const verticalMargin = css`
    ${(props: SpacingProps) =>
        props.my ? `margin-top: ${getMarginPadding(props.my)}` : ""}
    ${(props: SpacingProps) =>
        props.my ? `margin-bottom: ${getMarginPadding(props.my)}` : ""}
`;

export const Spacing = css`
    ${(props: SpacingProps) =>
        props.p ? `padding: ${getMarginPadding(props.p)}` : ""}
    ${horizontalPadding}
    ${verticalPadding}
    ${horizontalMargin}
    ${verticalMargin}
    ${(props: SpacingProps) =>
        props.pt ? `padding-top: ${getMarginPadding(props.pt)}` : ""}
    ${(props: SpacingProps) =>
        props.pb ? `padding-bottom: ${getMarginPadding(props.pb)}` : ""}
    ${(props: SpacingProps) =>
        props.pl ? `padding-left: ${getMarginPadding(props.pl)}` : ""}
    ${(props: SpacingProps) =>
        props.pr ? `padding-right: ${getMarginPadding(props.pr)}` : ""}
    ${(props: SpacingProps) =>
        props.ml ? `margin-left: ${getMarginPadding(props.ml)}` : ""}
    ${(props: SpacingProps) =>
        props.mr ? `margin-right: ${getMarginPadding(props.mr)}` : ""}
    ${(props: SpacingProps) =>
        props.mt ? `margin-top: ${getMarginPadding(props.mt)}` : ""}
    ${(props: SpacingProps) =>
        props.mb ? `margin-bottom: ${getMarginPadding(props.mb)}` : ""}
`;
