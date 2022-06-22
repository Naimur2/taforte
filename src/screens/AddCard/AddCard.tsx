import React from "react";

import Screen from "../../components/Screen";
import IconCard from "../../components/IconCard";
import styled from "styled-components/native";
import { Spacing } from "../../styled/spacing";

const AddCard: React.FC = () => {
    return (
        <Screen title={"Add Card"} leftIcon={true}>
            <Vstack pt={50} px={16}>
                <IconCard
                    mb={16}
                    iconName="image"
                    tittle="Import from Gallery"
                />
                <IconCard iconName="card-edit" tittle="Creat Card Manually" />
            </Vstack>
        </Screen>
    );
};

const Vstack = styled.View`
    pading: 16px;
    ${Spacing}
`;

export default AddCard;
