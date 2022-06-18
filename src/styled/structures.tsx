import styled from "styled-components/native";
import { SpacingProps } from "../interfaces";
import { Spacing } from "./spacing";

export const Box = styled.Pressable`
    ${Spacing}
    background-color: #FFFFFF10;
    padding: 6px;
    border-radius: 8px;
`;

interface ContainerProps extends SpacingProps {
    flex?: number;
}

export const Container = styled.View<ContainerProps>`
    background-color: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    flex: ${(props) => props.flex || 0.92};
    ${Spacing}
`;
