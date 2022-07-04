import React from "react";
import styled from "styled-components/native";
import Screen from "../../components/Screen";
import { Spacing } from "../../styled/spacing";
import ThreeSwitch from "../common/threeSwitch/ThreeSwitch";

const MyCard = () => {
    const [active, setActive] = React.useState(1);
    console.log(active);
    return (
        <Screen>
            <VStack mt={30} px={16}>
                <ThreeSwitch onPress={(curr) => setActive(curr)} />
            </VStack>
        </Screen>
    );
};

const VStack = styled.View`
    ${Spacing}
`;

export default MyCard;
