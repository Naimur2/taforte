import React from "react";
import styled from "styled-components/native";
import { Text } from "../../styled/typography";

import colors from "./../../themes/colors";

export default function HomeScreen() {
    return (
        <React.Fragment>
            <Card>
                <Text fontWeight={"400"}>Hodawsdasdsadasdasasdsame</Text>
            </Card>
        </React.Fragment>
    );
}

const Card = styled.View`
    background-color: ${colors.light100};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
`;
