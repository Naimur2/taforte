import React from "react";
import { View } from "react-native";
import { Text } from "../../styled/typography";
import styled from "styled-components/native";
import { Spacing } from "../../styled/spacing";
import Icon from "../../components/Icon";
import colors from "../../themes/colors";

const ImageUploadCard: React.FC = () => {
    return (
        <Box my={16}>
            <Text fontSize={16} fontWeight={600}>
                Upload a file
            </Text>
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
                    Max file size: 5MB
                </Text>
            </Container>
        </Box>
    );
};

const Box = styled.View`
    ${Spacing}
`;

const Container = styled.Pressable`
    margin-top: 10px;
    padding: 30px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px dashed ${colors.primary};
    background: ${colors.light100};
    border-radius: 8px;
`;

export default ImageUploadCard;
