import React from "react";
import styled from "styled-components/native";
import Button from "../../../../components/Button";
import Icon from "../../../../components/Icon";
import Input from "../../../../components/Input";
import Screen from "../../../../components/Screen";
import { KeyboardView } from "../../../../styled";
import { Spacing } from "../../../../styled/spacing";
import { Text } from "../../../../styled/typography";
import colors from "../../../../themes/colors";
import AddFeieldModal from "./components/AddFieldModal";

interface InputFieldProps {
    _id: string;
    label: string;
    placeholder: string;
}

const ACManualy = () => {
    const [inputFields, setInputFields] = React.useState<InputFieldProps[]>([]);

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

    const handleAddField = (label: string, placeholder: string) => {
        setInputFields([
            ...inputFields,
            {
                _id: Date.now().toString(),
                label,
                placeholder,
            },
        ]);
        setModalVisible(false);
    };

    return (
        <Screen>
            <KeyboardView>
                <InnerView px={16} mt={16}>
                    {inputFields.map((input) => (
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
                    <AddFeieldModal
                        isVisible={modalVisible}
                        onAdd={handleAddField}
                        onClose={() => setModalVisible((prev) => !prev)}
                    />
                    <Button mt={"30%"} mb={20} text="Save" />
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

export default ACManualy;
