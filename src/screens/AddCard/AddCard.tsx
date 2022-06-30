import React from "react";

import Screen from "../../components/Screen";
import IconCard from "../../components/IconCard";
import styled from "styled-components/native";
import { Spacing } from "../../styled/spacing";
import { useNavigation } from "@react-navigation/native";

const AddCard: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Screen noHeader title={"Add Card"} leftIcon={true}>
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
                    onPress={() => navigation.navigate("ACManualy")}
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
