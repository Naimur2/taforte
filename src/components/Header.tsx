import styled from "styled-components/native";

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "../styled/typography";
import Icon from "./Icon";
import { Spacing } from "../styled/spacing";
import { SpacingProps } from "./../interfaces/index";

interface NavProps {
    title: string;
    icon?: string;
    onPress?: () => void;
}

export default function Header({ leftIcon, title, onNavigate }: NavProps) {
    const navigation = useNavigation();
    return (
        <Nav>
            {leftIcon && (
                <Box onPress={onNavigate || navigation.goBack()}>
                    <Icon name={leftIcon} size={20} color={"#fff"} />
                </Box>
            )}
            <Title fontSize={20} fontWeight="700" color="#fff">
                {title}
            </Title>
        </Nav>
    );
}

const Nav = styled.View`
    flex: 0.08;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

const Box = styled.Pressable<SpacingProps>`
    ${Spacing}
    background-color: #FFFFFF10;
    padding: 6px;
    border-radius: 8px;
`;

const Title = styled(Text)`
    margin-left: auto;
    margin-right: auto;
`;
