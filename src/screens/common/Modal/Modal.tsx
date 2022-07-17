import React from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import styled from "styled-components/native";
import Button from "../../../components/Button";
import { Spacing } from "../../../styled/spacing";
import { Text } from "../../../styled/typography";

const width = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

interface ModalProps {
    isVisible: boolean;
    onAccept?: (label: string, placeholder: string) => void;
    onClose?: () => void;
    children?: React.ReactNode;
    title?: string;
    _titleStyle?: any;
    leftButtonTitle?: string;
    rightButtonTitle?: string;
}

const Popup = ({
    isVisible,
    onAccept,
    onClose,
    children,
    title,
    _titleStyle = {},
    leftButtonTitle,
    rightButtonTitle,
}: ModalProps) => {
    return (
        <Modal
            isVisible={isVisible}
            deviceWidth={width}
            deviceHeight={deviceHeight}
            style={{
                marginHorizontal: 10,
            }}
            animationOut="bounceOut"
            animationIn="bounceIn"
            onBackdropPress={onClose}
        >
            <InnerModal p={16}>
                {title && (
                    <Text
                        mb={20}
                        mx="auto"
                        fontSize={24}
                        fontWeight={600}
                        textAlign="center"
                        lineHeight={30}
                        {..._titleStyle}
                    >
                        {title}
                    </Text>
                )}

                {children}

                {leftButtonTitle || rightButtonTitle ? (
                    <HStack my={16}>
                        {leftButtonTitle && (
                            <Button
                                onPress={onClose}
                                variant="gray"
                                text={leftButtonTitle}
                                width={"44%"}
                                mr="auto"
                                py={12}
                            />
                        )}
                        {rightButtonTitle && (
                            <Button
                                width={"44%"}
                                onPress={onAccept}
                                variant="primary"
                                text={rightButtonTitle}
                                ml="auto"
                                py={12}
                            />
                        )}
                    </HStack>
                ) : null}
            </InnerModal>
        </Modal>
    );
};

const InnerModal = styled.View`
    background: #fff;
    border-radius: 10px;
    ${Spacing};
`;

const HStack = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${Spacing}
`;

export default Popup;
