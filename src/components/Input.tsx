import React from "react";
import styled from "styled-components/native";
import { IconProps } from "../interfaces/index";
import { Size } from "../styled";
import { Spacing } from "../styled/spacing";
import { Text } from "../styled/typography";
import colors from "../themes/colors";
import Icon from "./Icon";

interface LeftIconProps {
    leftIcon?: string;
    _leftIconStyle?: IconProps;
    leftIconComponent?: React.ReactNode;
}
interface RightIconProps {
    rightIcon?: string;
    _rightIconStyle?: IconProps;
    rightIconComponent?: React.ReactNode;
}

interface Props extends LeftIconProps, RightIconProps {
    label?: string;
    error?: string;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    placeholderTextColor?: string;
    autoCorrect?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    autoComplete?: "on" | "off";
    type?: "text" | "password";
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
    returnKeyType?: "done" | "go" | "next" | "search" | "send";
    onLeftIconPress?: () => void;
    onRightIconPress?: () => void;
    onSubmitEditing?: () => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onChangeText?: (text: string) => void;
}

export default function Input({
    label,
    placeholder,
    value,
    type,
    placeholderTextColor,
    autoCapitalize,
    autoCorrect,
    autoComplete,
    autofocus,
    defaultValue,
    keyboardType,
    returnKeyType,
    leftIcon,
    rightIcon,
    _leftIconStyle,
    leftIconComponent,
    rightIconComponent,
    _rightIconStyle,
    error,
    disabled,
    onChangeText,
    onSubmitEditing,
    onBlur,
    onFocus,
    onLeftIconPress,
    onRightIconPress,
}: Props) {
    const inputRef = React.useRef<any>(null);
    const [focused, setFocused] = React.useState<boolean>(false);

    type StrOreNum = string | number;

    const getInputWidth = () => {
        let width: number = 100;
        if (leftIcon || leftIconComponent) {
            width = width - 10;
        }

        if (rightIcon || rightIconComponent) {
            width = width - 10;
        }
        return `${width}%`;
    };

    const getInputBorderColor = () => {
        if (disabled) {
            return colors.light300;
        }
        if (error) {
            return colors.warning100;
        }
        if (focused) {
            return colors.gray100;
        }
        return colors.light200;
    };

    const handleFocus = () => {
        setFocused(true);
        if (onFocus) {
            onFocus();
        }
    };

    const handleBlur = () => {
        setFocused(false);
        if (onBlur) {
            onBlur();
        }
    };

    return (
        <FormGroup>
            {label && (
                <Text
                    onPress={() => inputRef.current.focus()}
                    fontSize={16}
                    fontWeight={500}
                >
                    {label}
                </Text>
            )}
            <InputGroup
                mt={8}
                bg={disabled && colors.light300}
                pointerEvent={disabled ? "none" : "auto"}
                borderColor={getInputBorderColor()}
            >
                {leftIcon && (
                    <FormIcon width={"10%"}>
                        <Icon
                            name={leftIcon}
                            size={20}
                            color={colors.gray300}
                            onPress={onLeftIconPress}
                            {..._rightIconStyle}
                        />
                        {leftIconComponent ? leftIiconComponent : null}
                    </FormIcon>
                )}

                <FormInput
                    ref={inputRef}
                    secureTextEntry={type === "password"}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={
                        placeholderTextColor || colors.gray300
                    }
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitEditing}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    autoComplete={autoComplete}
                    autofocus={autofocus}
                    defaultValue={defaultValue}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    width={getInputWidth()}
                    editable={!disabled}
                />
                {rightIcon && (
                    <FormIcon width={"10%"}>
                        <Icon
                            name={rightIcon}
                            size={20}
                            color={colors.gray300}
                            onPress={onRightIconPress}
                            {..._leftIconStyle}
                        />
                        {rightIconComponent ? rightIconComponent : null}
                    </FormIcon>
                )}
            </InputGroup>
            {error && (
                <Text
                    mt={8}
                    ml={4}
                    fontSize={12}
                    color={colors.warning100}
                    textAlign="center"
                    fonWeight={400}
                >
                    {error}
                </Text>
            )}
        </FormGroup>
    );
}

interface FormGroupStyles extends Size, Spacing {
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    bg?: string;
}

interface FormInputStyles extends Size, Spacing {
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    fontFamily?: string;
}

const FormInput = styled.TextInput<FormInputStyles>`
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

const InputGroup = styled.View<FormGroupStyles>`
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

const FormGroup = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    ${Size}
    ${Spacing}
`;

const FormIcon = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    ${Size}
`;
