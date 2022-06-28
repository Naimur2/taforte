import React from "react";

import styled from "styled-components/native";
import Screen from "../../components/Screen";
import { SpacingProps } from "../../interfaces";
import { Spacing } from "../../styled/spacing";
import ContactCard from "./components/ContactCXard";
import Search from "./components/Search";

export default function ContactScreen() {
    return (
        <Screen title={"Contats"} leftIcon={false}>
            <Box pt={16} px={16}>
                <Search my={8} />
                <ContactCard />
            </Box>
        </Screen>
    );
}

const Box = styled.View<SpacingProps>`
    ${Spacing}
`;
