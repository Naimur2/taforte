import { SizeProps } from "../interfaces";
import styled, { css } from "styled-components/native";
import { checkAndGetPercentage } from "../helper";
import Checkbox from "expo-checkbox";

import { Spacing } from "./spacing";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Size = css<SizeProps>`
    ${(props) => props.width && `width: ${checkAndGetPercentage(props.width)}`}
    ${(props) =>
        props.height && `height: ${checkAndGetPercentage(props.height)}`}
`;

export const CheckBox = styled(Checkbox)`
    border-radius: 5px;
    margin-right: 5px;
    padding: 2px;
    ${Spacing}
    ${Size}
`;

export const KeyboardView = styled(KeyboardAwareScrollView)`
    flex: 1;
    width: 100%;
    ${Spacing}
    ${Size}
`;
