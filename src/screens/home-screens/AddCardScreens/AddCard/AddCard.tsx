import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../../../components/Screen";
import IconCard from "../../../../components/IconCard";
import { Spacing } from "../../../../styled/spacing";

const AddCard = () => {
    const navigation = useNavigation();

    return (
        <Screen>
            <Vstack pt={50} px={16}>
                <IconCard
                    mb={16}
                    iconName="image"
                    tittle="Import from Gallery"
                    onPress={() => navigation.navigate("ACGallery")}
                />
                <IconCard
                    iconName="card-edit"
                    tittle="Create Card Manually"
                    onPress={() => navigation.navigate("Templates")}
                />
            </Vstack>
        </Screen>
    );
};

const Vstack = styled.View`
    pading: 16px;
    ${Spacing}
`;

export default AddCard;
