import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
const empty1 = require("../../../../assets/images/empty-1.png");

const Empty = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Container px={16}>
            <Image mt={"50%"} mb={20} source={empty1} />
            {children}
        </Container>
    );
};

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    ${Spacing}
`;

const Image = styled.Image`
    width: 250px;
    height: 250px;
    ${Spacing}
`;

export default Empty;
