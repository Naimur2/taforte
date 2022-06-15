import React from "react";
import styled from "styled-components/native";
import Icon from "../../components/Icon";
import { Spacing } from "../../styled/spacing";
import { Text } from "../../styled/typography";

import colors from "./../../themes/colors";

export default function HomeScreen() {
    return (
        <React.Fragment>
            <MainMenu>
                <Card>
                    <InnerCard my="16">
                        <Icon name="add" size={20} color={colors.orange100} />
                    </InnerCard>
                    <Text fontSize={20} fontWeight={"500"}>
                        Add Card
                    </Text>
                </Card>
            </MainMenu>
        </React.Fragment>
    );
}

const Card = styled.View`
    ${Spacing}
    background-color: ${colors.light100};
    border-radius: 20px;
    padding: 20px;
    border: 2px solid ${colors.primary};
    width: 45%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const InnerCard = styled.View`
    ${Spacing}
    padding: 20px 24px;
    background-color: ${colors.orange200};
    border-radius: 8px;
`;

const MainMenu = styled.View`
    background-color: #fff;
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    flex: 1;
`;
