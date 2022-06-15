import { css } from "styled-components/native";
import { SpacingProps } from "../interfaces";

const horizontalPadding = css`
    ${(props: SpacingProps) => (props.px ? `padding-left: ${props.px}px` : "")}
    ${(props: SpacingProps) => (props.px ? `padding-right: ${props.px}px` : "")}
`;

const verticalPadding = css`
    ${(props: SpacingProps) => (props.py ? `padding-top: ${props.py}px` : "")}
    ${(props: SpacingProps) =>
        props.py ? `padding-bottom: ${props.py}px` : ""}
`;

const horizontalMargin = css`
    ${(props: SpacingProps) => (props.mx ? `margin-left: ${props.mx}px` : "")}
    ${(props: SpacingProps) => (props.mx ? `margin-right: ${props.mx}px` : "")}
`;

const verticalMargin = css`
    ${(props: SpacingProps) => (props.my ? `margin-top: ${props.my}px` : "")}
    ${(props: SpacingProps) => (props.my ? `margin-bottom: ${props.my}px` : "")}
`;

export const Spacing = css`
    ${(props: SpacingProps) => (props.p ? `${props.p}px` : "")}
    ${(props: SpacingProps) => (props.px ? `${props.px}px` : "")}
    ${horizontalPadding}
    ${verticalPadding}
    ${horizontalMargin}
    ${verticalMargin}
    ${(props: SpacingProps) => (props.pt ? `padding-top: ${props.pt}px` : "")}
    ${(props: SpacingProps) =>
        props.pb ? `padding-bottom: ${props.pb}px` : ""}
    ${(props: SpacingProps) => (props.pl ? `padding-left: ${props.pl}px` : "")}
    ${(props: SpacingProps) => (props.pr ? `padding-right: ${props.pr}px` : "")}
    ${(props: SpacingProps) => (props.ml ? `margin-left: ${props.ml}px` : "")}
    ${(props: SpacingProps) => (props.mr ? `margin-right: ${props.mr}px` : "")}
    ${(props: SpacingProps) => (props.mt ? `margin-top: ${props.mt}px` : "")}
    ${(props: SpacingProps) => (props.mb ? `margin-bottom: ${props.mb}px` : "")}
`;
