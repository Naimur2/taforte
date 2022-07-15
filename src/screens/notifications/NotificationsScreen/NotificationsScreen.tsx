import React from "react";

import styled from "styled-components/native";
import IconCard from "../../../components/IconCard";
import Screen from "../../../components/Screen";
import { Spacing } from "../../../styled/spacing";

import ToggleSwitch from "toggle-switch-react-native";
import { Size } from "../../../styled";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";

const NotificationsScreen: React.FC = () => {
    const [isEnabled, setIsEnabled] = React.useState<boolean>(false);

    return (
        <Screen title={"Notificatons"}>
            <Vstack pt={50} px={16}>
                <IconCard
                    mb={16}
                    iconName="notification"
                    tittle="Receive notifications"
                    rightProps={
                        <ToggleSwitch
                            isOn={isEnabled}
                            onColor={colors.primary}
                            offColor={colors.light200}
                            size="small"
                            onToggle={(isOn) =>
                                setIsEnabled(isOn ? true : false)
                            }
                        />
                    }
                />
                <Card onPress={() => console.log("hgf")}>
                    <Avatar mr={20}>
                        <Text color="#fff" fontSize={16} fontWeight={700}>
                            WA
                        </Text>
                    </Avatar>
                    <Text fontSize={16} fontWeight={400}>
                        {"Receive notifications"}
                    </Text>
                    <Right>
                        <Text
                            color={colors.gray500}
                            fontSize={12}
                            fontWeight={400}
                        >
                            Business
                        </Text>
                    </Right>
                </Card>
            </Vstack>
        </Screen>
    );
};

const Vstack = styled.View`
    pading: 16px;
    ${Spacing}
`;

const Card = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.light200};
    ${Spacing}
    ${Size}
`;

const Right = styled.View`
    margin-left: auto;
`;

const Avatar = styled.ImageBackground`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    ${Spacing}
`;

export default NotificationsScreen;
