import React from "react";

import Screen from "../../components/Screen";
import { Collapseable } from "../common/Collapsable/Collapsable";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Spacing } from "../../styled/spacing";
import { Text } from "../../styled/typography";

const Faq = () => {
    return (
        <Screen pt={30}>
            <Text px={16} pb={16} fontSize={18} fontWeight={700}>
                Top Questions
            </Text>
            <ScrollView>
                <Container px={16}>
                    <Collapseable />
                    <Collapseable />
                    <Collapseable />
                    <Collapseable />
                    <Collapseable />
                    <Collapseable />
                    <Collapseable />
                </Container>
            </ScrollView>
        </Screen>
    );
};

const Container = styled.View`
    ${Spacing}
`;

export default Faq;
