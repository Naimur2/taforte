import React from "react";
import Background from "../../components/Background";
import Container from "../../components/Container";
import Header from "../../components/Header";
import styled from "styled-components/native";
import Icon from "../../components/Icon";
import colors from "../../themes/colors";

export default function ContactScreen() {
    return (
        <Background>
            <Header title="Contacts" />
            <Container>
                <SearchBar>
                    <SearchIcon
                        color={colors.dark100}
                        name="search"
                        size={20}
                    />
                    <Input placeholder="Search" />
                </SearchBar>
            </Container>
        </Background>
    );
}

const SearchBar = styled.View`
    display: flex;
    border: 1px solid ${colors.gray200};
    border-radius: 10px;
    padding: 0 12px;
    flex-direction: row;
    align-items: center;
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
    padding-top: 8px;
    padding-bottom: 8px;
    width: 92%;
`;
