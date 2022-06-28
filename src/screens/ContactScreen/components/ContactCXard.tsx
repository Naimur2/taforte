import React from "react";
import styled from "styled-components/native";
import Icon from "../../../components/Icon";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";
import * as Linking from "expo-linking";
import { Share } from "react-native";

interface CProps {
    avarar?: string;
    name?: string;
    phone?: string;
}

const userData: CProps = {
    avarar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "John Doe",
    phone: "123456789",
};

const ContactCard: React.FC = () => {
    const handleCall = () => {
        Linking.openURL(`tel:${userData.phone}`);
    };

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: `${userData.name} - ${userData.phone}`,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log(result.activityType);
                } else {
                    console.log("Shared");
                }
            } else if (result.action === Share.dismissedAction) {
                console.log("Cancelled");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <HStack py={14}>
            <Content>
                <Avatar source={{ uri: userData.avarar }} />
                <Text ml={16} fontSize={14}>
                    {userData.name}
                </Text>
            </Content>
            <Content>
                <IconsBox mr={16} onPress={handleShare}>
                    <Icon name="share" size={16} color={colors.gray100} />
                </IconsBox>
                <IconsBox onPress={handleCall}>
                    <Icon
                        name="telephone-fill"
                        size={16}
                        color={colors.gray100}
                    />
                </IconsBox>
            </Content>
        </HStack>
    );
};

const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

const Content = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const HStack = styled(Content)`
    justify-content: space-between;

    ${Spacing}
`;

const IconsBox = styled.Pressable`
    padding: 8px;
    border-radius: 50px;
    background-color: ${colors.lightBlue300};
    ${Spacing}
`;

export default React.memo(ContactCard);
