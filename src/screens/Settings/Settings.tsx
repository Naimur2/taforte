import React from "react";

import Screen from "../../components/Screen";
import IconCard from "../../components/IconCard";
import styled from "styled-components/native";
import { Spacing } from "../../styled/spacing";

const Settings: React.FC = () => {
    const items: { iconName: string; tittle: string }[] = [
        {
            iconName: "telephone",
            tittle: "Add Contact Number",
        },
        {
            iconName: "edit-message",
            tittle: "Add Contact Number",
        },
        {
            iconName: "lock",
            tittle: "Change Password",
        },
        {
            iconName: "sync",
            tittle: "Sync Account",
        },
    ];

    return (
        <Screen title={"Settings"} leftIcon={true}>
            <Vstack pt={50} px={16}>
                {items.map((item, index) => (
                    <IconCard
                        mb={16}
                        iconName={item.iconName}
                        tittle={item.tittle}
                        key={index}
                    />
                ))}
            </Vstack>
        </Screen>
    );
};

const Vstack = styled.View`
    pading: 16px;
    ${Spacing}
`;

export default Settings;
