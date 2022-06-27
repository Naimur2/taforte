import React from "react";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { KeyboardView } from "../../styled";
import { Spacing } from "../../styled/spacing";

import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import HeaderBack from "../../components/HeaderBack";

const ACGallery: React.FC = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <HeaderBack />,
        });
    }, [navigation]);

    return (
        <Screen noHeader pt={30} leftIcon title="Add Card From Gallery">
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
