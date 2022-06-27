import React from "react";
import { View, ScrollView } from "react-native";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { KeyboardView } from "../../styled";
import { Spacing } from "../../styled/spacing";

import { Text } from "../../styled/typography";
import styled from "styled-components/native";

const ACGallery: React.FC = () => {
    return (
        <Screen pt={30} leftIcon title="Add Card From Gallery">
            <KeyboardView>
                <InnerStack px={16}>
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <Input label="Card Title" placeholder="Enter Card Title" />
                </InnerStack>
            </KeyboardView>
        </Screen>
    );
};

const InnerStack = styled.View`
    ${Spacing}
`;

export default ACGallery;
