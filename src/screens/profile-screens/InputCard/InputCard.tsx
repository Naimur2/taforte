import React from "react";
import styled from "styled-components/native";
import Icon from "../../../components/Icon";
import { Text } from "../../../styled/typography";
import colors from "../../../themes/colors";

interface IProps {
    label: string;
    rightIcon: boolean | string;
    value: string;
    onEdit: () => void;
}

const InputCard = (props: IProps) => {
    return (
        <InputCardWrapper>
            <Text mb={8} fontSize={16} fontWeight={500}>
                {props.label}
            </Text>
            <InputContent>
                <Text color={colors.gray300}>{props.value}</Text>
                <Icon
                    name={props.rightIcon || "edit"}
                    size={20}
                    color={colors.gray300}
                    onPress={props.onEdit}
                />
            </InputContent>
        </InputCardWrapper>
    );
};

export default InputCard;

const InputContent = styled.View`
    border: none;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    padding: 16px;

    border: 1px solid ${colors.light200};
    justify-content: space-between;
`;

const InputCardWrapper = styled.View`
    margin-top: 20px;
`;
