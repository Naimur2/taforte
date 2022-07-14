import React from "react";
import styled from "styled-components/native";
import Icon from "../../../components/Icon";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";

export default function Stitle({
    title,
    onPress,
}: {
    title: string;
    onPress?: () => void;
}) {
    return (
        <HStack>
            <Text fontWeight={700} fontSize={16}>
                {title}
            </Text>
            <View>
                <Text
                    onPress={onPress}
                    pr={10}
                    fontSize={14}
                    color={colors.primary}
                >
                    See All
                </Text>
                <Icon name="chevron-right" size={14} color={colors.primary} />
            </View>
        </HStack>
    );
}

const HStack = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
`;

const View = styled.View`
    flex-direction: row;
    align-items: center;
`;
