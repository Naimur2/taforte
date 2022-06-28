import React from "react";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import colors from "../../../themes/colors";
import { SpacingProps } from "../../../interfaces/index";
import Icon from "../../../components/Icon";

interface SearchProps extends SpacingProps {
    onChangeText?: (text: string) => void;
}

const Search = ({ onChangeText, ...rest }: SearchProps) => {
    return (
        <SearchBar mt={20} {...rest}>
            <SearchIcon color={colors.dark100} name="search" size={20} />
            <SearchInput
                onChangeText={onChangeText}
                placeholder="Search Contacts"
            />
        </SearchBar>
    );
};

const SearchBar = styled.View`
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

const SearchInput = styled.TextInput`
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

export default Search;
