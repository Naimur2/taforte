import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import styled from "styled-components/native";
import { StyledProps } from "../interfaces";
import { Spacing } from "../styled/spacing";

export const CustomIcon = createIconSetFromIcoMoon(
    require("../../assets/fonts/selection.json"),
    "Icon",
    "icon.ttf"
);

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    onPress?: () => void;
}

interface Props extends IconProps, StyledProps {}

const StyledIcon = styled(CustomIcon)`
    ${Spacing}
    color: ${(props: Props) => props.color || "black"};
`;

export default function Icon(props: Props) {
    return <StyledIcon {...props} />;
}
