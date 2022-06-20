import { SpacingProps, SizeProps } from "./index";

export interface LeftIconProps {
    leftIcon?: string;
    _leftIconStyle?: IconProps;
    leftIconComponent?: React.ReactNode;
}

export interface RightIconProps {
    rightIcon?: string;
    _rightIconStyle?: IconProps;
    rightIconComponent?: React.ReactNode;
}

export interface InputProps
    extends LeftIconProps,
        RightIconProps,
        SpacingProps {
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

export interface FormGroupStyles extends SizeProps, SpacingProps {
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    bg?: string;
}

export interface FormInputStyles extends SizeProps, SpacingProps {
    color?: string;
    fontSize?: number;
    fontWeight?: number;
    fontFamily?: string;
}
