import React from "react";
import { Pressable } from "react-native";
import { Text } from "../../../styled/typography";
import styled from "styled-components/native";
import { Spacing } from "../../../styled/spacing";
import Icon from "../../../components/Icon";
import colors from "../../../themes/colors";

interface ImageUploadCardProps {
    onPress?: () => void;
    title?: string;
    maxSize?: string;
    image?: string | boolean;
}

const ImageUploadCard = ({
    onPress,
    title,
    maxSize,
    image,
}: ImageUploadCardProps) => {
    return (
        <Box my={16}>
            <Text mb={10} fontSize={16} fontWeight={600}>
                {title}
            </Text>
            <Pressable onPress={onPress}>
                {image ? (
                    <Image
                        source={{
                            uri: image,
                        }}
                        resizeMode="cover"
                    />
                ) : (
                    <Container>
                        <Icon name="image" size={34} color={colors.primary} />
                        <Text
                            mt={20}
                            color={colors.gray200}
                            fontSize={16}
                            fontFamily={"Montserrat"}
                            fontWeight={600}
                            mb={8}
                        >
                            Choose file here...
                        </Text>
                        <Text
                            fontFamily={"Montserrat"}
                            color={colors.gray200}
                            fontSize={12}
                            fontWeight={300}
                        >
                            Max file size: {maxSize}
                        </Text>
                    </Container>
                )}
            </Pressable>
        </Box>
    );
};

const Box = styled.View`
    ${Spacing}
`;

const Image = styled.Image`
    width: 100%;
    height: 160px;
    border-radius: 8px;
`;

const Container = styled.View`
    padding: 30px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed ${colors.primary};
    background: ${colors.light100};
    border-radius: 8px;
    height: 160px;
`;

export default ImageUploadCard;
