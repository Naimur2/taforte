import React from "react";
import { InputProps } from "../interfaces/input";
import {
    FormGroup,
    FormIcon,
    FormInput,
    InputGroup,
} from "../styled/input-styles";
import { Text } from "../styled/typography";
import colors from "../themes/colors";
import Icon from "./Icon";

const Input = (
    {
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
        textAlign,
        bg,
        borderColor,
        numberOfLines,
        ...rest
    }: InputProps,
    ref
) => {
    const inputRef = React.useRef<any>(null);
    const [focused, setFocused] = React.useState<boolean>(false);

    React.useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        },
    }));

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
        <FormGroup {...rest}>
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
                bg={bg ? bg : disabled && colors.light300}
                pointerEvent={disabled ? "none" : "auto"}
                borderColor={borderColor ? borderColor : getInputBorderColor()}
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
                    textAlign={textAlign}
                    numberOfLines={numberOfLines}
                    multiline={numberOfLines > 1}
                    textAlignVertical={numberOfLines > 1 ? "top" : "center"}
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
};

export default React.forwardRef(Input);
