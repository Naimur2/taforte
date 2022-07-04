import React from "react";
import Input from "../../components/Input";
import Screen from "../../components/Screen";
import { KeyboardView } from "../../styled";
import { Spacing } from "../../styled/spacing";

import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import HeaderBack from "../../components/HeaderBack";
import ImageUploadCard from "../common/ImageUploadCard";
import Button from "../../components/Button";
import useImagePicker from "../../hooks/use-image-picker";

const ACGallery: React.FC = () => {
    const navigation = useNavigation();
    const imageUploader1 = useImagePicker({});
    const imageUploader2 = useImagePicker({});

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <HeaderBack />,
        });
    }, [navigation]);

    return (
        <Screen noHeader pt={30} leftIcon title="Add Card From Gallery">
            <KeyboardView>
                <InnerStack p={16}>
                    <Input label="Card Title" placeholder="Enter Card Title" />
                    <ImageUploadCard
                        image={imageUploader1.image}
                        title="Upload front side"
                        maxSize="5 MB"
                        onPress={imageUploader1.pickImage}
                    />
                    <ImageUploadCard
                        image={imageUploader2.image}
                        onPress={imageUploader2.pickImage}
                        title="Upload back side"
                        maxSize="5 MB"
                    />
                    <Button mb={10} mt={"10%"} text="Save" />
                </InnerStack>
            </KeyboardView>
        </Screen>
    );
};

const InnerStack = styled.View`
    ${Spacing}
`;

export default ACGallery;
