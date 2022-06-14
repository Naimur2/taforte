import { css } from "styled-components/native";
import { StyledProps } from "../interfaces";

const horizontalPadding = css`
    ${(props: StyledProps) => (props.px ? `padding-left: ${props.px}px` : "")}
    ${(props: StyledProps) => (props.px ? `padding-right: ${props.px}px` : "")}
`;

const verticalPadding = css`
    ${(props: StyledProps) => (props.py ? `padding-top: ${props.py}px` : "")}
    ${(props: StyledProps) => (props.py ? `padding-bottom: ${props.py}px` : "")}
`;

const horizontalMargin = css`
    ${(props: StyledProps) => (props.mx ? `margin-left: ${props.mx}px` : "")}
    ${(props: StyledProps) => (props.mx ? `margin-right: ${props.mx}px` : "")}
`;

const verticalMargin = css`
    ${(props: StyledProps) => (props.my ? `margin-top: ${props.my}px` : "")}
    ${(props: StyledProps) => (props.my ? `margin-bottom: ${props.my}px` : "")}
`;

export const Spacing = css`
    ${(props: StyledProps) => (props.p ? `${props.p}px` : "")}
    ${(props: StyledProps) => (props.px ? `${props.px}px` : "")}
    ${horizontalPadding}
    ${verticalPadding}
    ${horizontalMargin}
    ${verticalMargin}
    ${(props: StyledProps) => (props.pt ? `padding-top: ${props.pt}px` : "")}
    ${(props: StyledProps) => (props.pb ? `padding-bottom: ${props.pb}px` : "")}
    ${(props: StyledProps) => (props.pl ? `padding-left: ${props.pl}px` : "")}
    ${(props: StyledProps) => (props.pr ? `padding-right: ${props.pr}px` : "")}
    ${(props: StyledProps) => (props.ml ? `margin-left: ${props.ml}px` : "")}
    ${(props: StyledProps) => (props.mr ? `margin-right: ${props.mr}px` : "")}
    ${(props: StyledProps) => (props.mt ? `margin-top: ${props.mt}px` : "")}
    ${(props: StyledProps) => (props.mb ? `margin-bottom: ${props.mb}px` : "")}
`;
