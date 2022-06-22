import React from "react";
import styled from "styled-components/native";
import Icon from "./Icon";
import { SizeProps, SpacingProps } from "../interfaces/index";
import colors from "../themes/colors";
import { Text } from "../styled/typography";
import { Spacing } from "../styled/spacing";
import { Size } from "../styled";

interface IconCardProps extends SpacingProps, SizeProps {
    iconName?: string;
    tittle?: string;
    onPress?: () => void;
    rightProps?: React.ReactNode;
}

export default function IconCard({
    iconName,
    tittle,
    onPress,
    rightProps,
    ...rest
}: IconCardProps) {
    return (
        <Card onPress={onPress} {...rest}>
            {iconName ? (
                <Icon
                    mr={20}
                    color={colors.primary}
                    name={iconName}
                    size={24}
                />
            ) : null}
            <Text fontSize={14} fontWeight={500}>
                {tittle}
            </Text>
            {rightProps ? <Right>{rightProps}</Right> : null}
        </Card>
    );
}

const Card = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    border-radius: 8px;
    border: 1px solid ${colors.light200};
    ${Spacing}
    ${Size}
`;

const Right = styled.View`
    margin-left: auto;
`;
