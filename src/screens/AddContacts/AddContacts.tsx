import { useFormik } from "formik";
import React from "react";
import styled from "styled-components/native";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { KeyboardView, Size } from "../../styled";
import { Spacing } from "../../styled/spacing";
import { Text } from "../../styled/typography";
import { AddNewContactsSchema } from "./../../schemas/index";
import { Image as RNImage } from "react-native";
import useImagePicker from "../../hooks/use-image-picker";
import Button from "../../components/Button";

const profileCircle = require("../../../assets/images/profile-circle.png");
const defaultImage = RNImage.resolveAssetSource(profileCircle).uri;

interface Props {
    name?: string;
    phone?: string;
    avatar?: string;
}

export default function AddContacts() {
    const { pickImage, image } = useImagePicker({});

    const initialValues: Props = {
        name: "",
        phone: "",
    };

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => console.log(data),
        validationSchema: AddNewContactsSchema,
    });

    return (
        <Screen padding={0}>
            <KeyboardView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <AvatarContainer>
                    <Avatar source={{ uri: image || defaultImage }} />
                    <IconContainer>
                        <Icon onPress={pickImage} name="camera" size={20} />
                    </IconContainer>
                </AvatarContainer>
                <Text fontSize={18} mx={"auto"}>
                    Add photo
                </Text>

                <VStack pb={30}>
                    <Input
                        mt={"10%"}
                        label="User's name"
                        placeholder="Enter user's name"
                        value={formik.values.name}
                        onChangeText={formik.handleChange("name")}
                        error={formik.errors.name}
                    />
                    <Input
                        label="User's phone"
                        placeholder="Enter user's phone"
                        value={formik.values.phone}
                        onChangeText={formik.handleChange("phone")}
                        error={formik.errors.phone}
                    />
                    <Button
                        mt={"40%"}
                        text="Save"
                        onPress={formik.handleSubmit}
                    />
                </VStack>
            </KeyboardView>
        </Screen>
    );
}

const VStack = styled.View`
    padding: 0 16px;
    ${Spacing}
    ${Size}
`;

const AvatarContainer = styled.View`
    margin: 20px auto;
    position: relative;
`;

const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

const IconContainer = styled.View`
    background: #fff;
    padding: 8px;
    border-radius: 50px;
    position: absolute;
    right: 0;
    bottom: 0;
`;
