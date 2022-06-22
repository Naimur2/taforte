import React from "react";

import Screen from "../../components/Screen";
import IconCard from "../../components/IconCard";
import styled from "styled-components/native";
import { Spacing } from "../../styled/spacing";
import Button from "../../components/Button";

const Help: React.FC = () => {
    return (
        <Screen title={"Help"} leftIcon={true}>
            <Vstack pt={50} px={16}>
                <IconCard mb={16} tittle="How to redeem premium code?" />
                <IconCard mb={16} tittle="How to redeem premium code?" />
                <IconCard mb={16} tittle="How to redeem premium code?" />
                <IconCard mb={16} tittle="How to redeem premium code?" />
                <IconCard mb={16} tittle="How to redeem premium code?" />
                <IconCard mb={16} tittle="How to redeem premium code?" />
                <Button text="Send Feedback" />
            </Vstack>
        </Screen>
    );
};

const Vstack = styled.View`
    pading: 16px;
    ${Spacing}
`;

export default Help;
