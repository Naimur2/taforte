import React from "react";
import colors from "../../../../themes/colors";
import styled from "styled-components/native";
import { SpacingProps } from "../../../../interfaces";
import { Spacing } from "../../../../styled/spacing";
import Icon from "../../../../components/Icon";
import { Text } from "../../../../styled/typography";

interface IProps {
    title: string;
    icon?: string;
    iconColor?: string;
    backgroundColor?: string;
    onPres?: () => void;
}

interface IBack {
    backgroundColor: string;
}

export default function IconCont({
    title,
    icon,
    onPress,
    iconColor,
    backgroundColor,
}: IProps) {
    return (
        <IconContainer my={10} onPress={onPress}>
            <IconBox p={16} backgroundColor={backgroundColor}>
                <Icon
                    name={icon || "barcode"}
                    size={24}
                    color={iconColor || colors.blue100}
                />
            </IconBox>
            <Text ml={20} fontSize={16} fontWeight={500}>
                {title}
            </Text>
        </IconContainer>
    );
}

const IconContainer = styled.Pressable<SpacingProps>`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    ${Spacing}
`;

const IconBox = styled.View<IBack>`
    background: ${(props) =>
        props.backgroundColor ? props.backgroundColor : colors.lightBlue100};
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    ${Spacing}
`;
