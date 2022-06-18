import React from "react";

import styled from "styled-components/native";
import Icon from "../../components/Icon";
import colors from "../../themes/colors";
import Screen from "../../components/Screen";
import { Spacing } from "../../styled/spacing";
import { SpacingProps } from "../../interfaces";

export default function ContactScreen() {
    return (
        <Screen title={"Contats"} leftIcon={false}>
            <SearchBar mt={20}>
                <SearchIcon color={colors.dark100} name="search" size={20} />
                <Input placeholder="Search" />
            </SearchBar>
        </Screen>
    );
}

const SearchBar = styled.View<SpacingProps>`
    display: flex;
    border: 1px solid ${colors.gray200};
    border-radius: 10px;
    padding: 0 12px;
    flex-direction: row;
    align-items: center;
    ${Spacing}
`;

const SearchIcon = styled(Icon)`
    width: 8%;
`;

const Input = styled.TextInput`
    border: none;
    color: ${colors.gray200};
    font-size: 14px;
    font-weight: 400;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 14px;
    padding-bottom: 14px;
    width: 92%;
`;
