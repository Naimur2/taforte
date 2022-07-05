import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import styled from "styled-components/native";
import { SpacingProps } from "../interfaces";
import { Spacing } from "../styled/spacing";
import { IconProps } from "../interfaces/index";
import React from "react";

export const CustomIcon = createIconSetFromIcoMoon(
    require("../../assets/fonts/selection.json"),
    "Icon",
    "icon.ttf"
);

interface Props extends IconProps, SpacingProps {}

const StyledIcon = styled(CustomIcon)`
    ${Spacing}
    color: ${(props: Props) => props.color || "black"};
`;

// export default function Icon(props: Props) {
//     return <StyledIcon {...props} />;
// }

export default class Icon extends React.Component {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <StyledIcon {...this.props} />;
    }
}
