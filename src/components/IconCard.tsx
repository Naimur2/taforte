import React from "react";
import styled from "styled-components/native";
import Icon from "./Icon";
import { SizeProps, SpacingProps } from "../interfaces/index";
import colors from "../themes/colors";
import { Text } from "../styled/typography";

interface IconCardProps extends SpacingProps, SizeProps {
    iconName?: string;
    tittle?: string;
}

export default function IconCard({ iconName, tittle }: IconCardProps) {
    return (
        <Card>
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
        </Card>
    );
}

const Card = styled.View``;
