import React from "react";
import { Text } from "../styled/typography";
import styled from "styled-components/native";
import colors from "../themes/colors";
import { Spacing } from "../styled/spacing";
import { SpacingProps } from "../interfaces";

interface Props {
    label?: string;
    error?: string;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onSubmitEditing?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    secureTextEntry?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoCorrect?: boolean;
    autoComplete?: "on" | "off";
    autofocus?: boolean;
    defaultValue?: string;
    keyboardType?:
        | "default"
        | "email-address"
        | "numeric"
        | "phone-pad"
        | "ascii-capable"
        | "numbers-and-punctuation"
        | "url"
        | "number-pad"
        | "name-phone-pad"
        | "decimal-pad"
        | "twitter"
        | "web-search";
}

export default function Input({ label, placeholder, value }: Props) {
    return (
        <FormGroup>
            <Text fontSize={16} fontWeight={500}>
                {label}
            </Text>
            <InputGroup mt={8}>
                <FormInput value={value} placehollder={placeholder} />
            </InputGroup>
        </FormGroup>
    );
}

const FormInput = styled.TextInput`
    border: none;
    border-radius: 10px;
    padding: 0;
    flex-direction: row;
    align-items: center;
    width: 100%;
    font-size: 14px;
    ${Spacing}
`;

const InputGroup = styled.View<SpacingProps>`
    display: flex;
    border: 1px solid ${colors.light200};
    padding: 16px;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    ${Spacing}
`;

const FormGroup = styled.View<SpacingProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    ${Spacing}
`;
