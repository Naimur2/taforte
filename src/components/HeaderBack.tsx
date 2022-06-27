import React from "react";

import styled from "styled-components/native";
import { Spacing } from "../styled/spacing";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";

interface HeaderBackProps {
    onNavigate?: () => void;
}

const HeaderBack: React.FC = ({ onNavigate }: HeaderBackProps) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <Box onPress={onNavigate || goBack}>
            <Icon name={"chevron-left"} size={14} color={"#fff"} />
        </Box>
    );
};

const Box = styled.Pressable<SpacingProps>`
    ${Spacing}
    background-color: #FFFFFF10;
    padding: 8px;
    border-radius: 8px;
`;

export default HeaderBack;
