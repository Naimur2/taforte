import styled from "styled-components/native";
import { SizeProps, SpacingProps } from "../interfaces";
import { FormGroupStyles, FormInputStyles } from "../interfaces/input";
import { Size } from "./index";
import { Spacing } from "./spacing";

export const FormInput = styled.TextInput<FormInputStyles>`
    border: none;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 6px;
    ${({ color }) => color && `color: ${color}`}
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px`}
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`}
    ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`}
    ${Size}
    ${Spacing}
`;

export const InputGroup = styled.View<FormGroupStyles>`
    display: flex;
    ${(props) =>
        `border: ${props.borderWidth || 1}px solid ${
            props.borderColor || colors.light200
        };`}
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: ${(props) =>
        props.borderRadius ? props.borderRadius : 6}px;
    position: relative;
    width: 100%;
    padding: 0 8px;
    background: ${(props) => (props.bg ? props.bg : "transparent")};
    ${Size}
    ${Spacing}
`;

export const FormGroup = styled.View<SpacingProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    ${Size}
    ${Spacing}
`;

export const FormIcon = styled.View<SizeProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    ${Size}
`;
