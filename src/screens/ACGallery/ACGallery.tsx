import React from "react";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { KeyboardView } from "../../styled";
import { Spacing } from "../../styled/spacing";

import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import HeaderBack from "../../components/HeaderBack";
import ImageUploadCard from "../common/ImageUploadCard";
import Button from "../../components/Button";

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
                <InnerStack p={16}>
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <ImageUploadCard />
                    <ImageUploadCard />
                    <Button mb={10} mt={"10%"} text="Save" />
                </InnerStack>
            </KeyboardView>
        </Screen>
    );
};

const InnerStack = styled.View`
    ${Spacing}
`;

export default ACGallery;
