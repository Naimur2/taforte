import { SizeProps } from "../interfaces";
import { css } from "styled-components/native";
import { checkAndGetPercentage } from "../helper";

export const Size = css<SizeProps>`
    ${(props) => props.width && `width: ${checkAndGetPercentage(props.width)}`}
    ${(props) =>
        props.height && `height: ${checkAndGetPercentage(props.height)}`}
`;
