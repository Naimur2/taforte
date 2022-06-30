import React from "react";
import Screen from "../../components/Screen";
import { KeyboardView } from "../../styled";
import styled from "styled-components/native";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import { Spacing } from "../../styled/spacing";
import { Text } from "../../styled/typography";
import colors from "../../themes/colors";
import Button from "../../components/Button";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";

interface InputFieldProps {
    _id: string;
    label: string;
    placeholder: string;
}

const width = Dimensions.get("window").width;

const ACManualy = () => {
    const [inputFioelds, setInputFields] = React.useState<InputFieldProps[]>(
        []
    );

    const [modalVisible, setModalVisible] = React.useState<boolean>(false);

    const inputs: InputFieldProps[] = [
        {
            _id: "1",
            label: "Name",
            placeholder: "Enter Name",
        },
        {
            _id: "2",
            label: "Phone Number",
            placeholder: "Enter Phone Number",
        },
        {
            _id: "3",
            label: "Email Address",
            placeholder: "Enter Email Address",
        },
        {
            _id: "4",
            label: "Email Company",
            placeholder: "Enter Company",
        },
    ];

    React.useEffect(() => {
        setInputFields(inputs);
    }, []);

    return (
        <Screen>
            <KeyboardView>
                <InnerView px={16} mt={16}>
                    {inputs.map((input) => (
                        <Input
                            key={input._id}
                            label={input.label}
                            placeholder={input.placeholder}
                        />
                    ))}
                    <AddIcon
                        my={16}
                        onPress={() => setModalVisible((prev) => !prev)}
                    >
                        <Icon color={colors.primary} name="add" size={20} />
                        <Text mx={16} color={colors.primary}>
                            Add Field
                        </Text>
                    </AddIcon>
                    <Modal
                        onBackdropPress={() => setModalVisible((prev) => !prev)}
                        isVisible={modalVisible}
                        deviceWidth={width}
                    >
                        <InnerModal p={16}>
                            <HStack>
                                <Button
                                    onPress={() =>
                                        setModalVisible((prev) => !prev)
                                    }
                                    variant="gray"
                                    text="Cancel"
                                />
                                <Button
                                    onPress={() =>
                                        setModalVisible((prev) => !prev)
                                    }
                                    variant="primary"
                                    text="Cancel"
                                />
                            </HStack>
                        </InnerModal>
                    </Modal>
                </InnerView>
            </KeyboardView>
        </Screen>
    );
};

const InnerView = styled.View`
    ${Spacing}
`;

const AddIcon = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${Spacing}
`;

const InnerModal = styled.View`
    background: #fff;
    ${Spacing};
`;

const HStack = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    ${Spacing}
`;

export default ACManualy;
