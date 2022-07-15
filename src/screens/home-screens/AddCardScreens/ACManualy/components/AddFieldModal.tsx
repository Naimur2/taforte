import { useFormik } from "formik";
import React from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import styled from "styled-components/native";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import { AddNewFieldSchema } from "../../../../../schemas";
import { Spacing } from "../../../../../styled/spacing";
import { Text } from "../../../../../styled/typography";

const width = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

interface AddFieldModalProps {
    isVisible: boolean;
    onAdd: (label: string, placeholder: string) => void;
    onClose: () => void;
}

const AddFeieldModal = ({ isVisible, onAdd, onClose }: AddFieldModalProps) => {
    const initialValues: {
        label: string;
    } = {
        label: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => onAdd(data.label, "Insert Value"),
        validationSchema: AddNewFieldSchema,
    });

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
        >
            <InnerModal p={16}>
                <Text mb={20} mx="auto" fontSize={20} fontWeight={600}>
                    Add new field
                </Text>
                <Input
                    label="Insert field name"
                    placeholder="Type field name"
                    value={formik.values.label}
                    onChangeText={formik.handleChange("label")}
                    error={formik.errors.label}
                />
                <HStack my={16}>
                    <Button
                        onPress={onClose}
                        variant="gray"
                        text="Cancel"
                        width={"48%"}
                    />
                    <Button
                        width={"48%"}
                        onPress={() => setModalVisible((prev) => !prev)}
                        variant="primary"
                        text="Add"
                        onPress={formik.handleSubmit}
                    />
                </HStack>
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

export default AddFeieldModal;
