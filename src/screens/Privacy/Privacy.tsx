import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Size } from "../../styled";
import { Spacing } from "../../styled/spacing";
import { Text } from "../../styled/typography";

const privacy = require("../../../assets/images/privacy.png");

const Privacy: React.FC = () => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
            }}
        >
            <Container>
                <PrivacyImage my={50} mx={"auto"} source={privacy} />
                <PrivacyBox>
                    <Text mb={8} fontSize={16} fontWeight={600}>
                        Privacy
                    </Text>
                    <Text
                        lineHeight={18}
                        textAlign="justify"
                        fontSize={12}
                        fontWeight={400}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sagittis, id pretium egestas sit tortor tortor. Laoreet
                        ipsum tempus cursus ut nullam aliquet at porta aliquet.
                        Tempus nunc risus velit ullamcorper dui est nec.
                        Pellentesque commodo non sem interdum nibh tortor
                        pretium massa.
                    </Text>
                </PrivacyBox>
                <PrivacyBox>
                    <Text mb={8} fontSize={16} fontWeight={600}>
                        Copyright
                    </Text>
                    <Text
                        lineHeight={18}
                        textAlign="justify"
                        fontSize={12}
                        fontWeight={400}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sagittis, id pretium egestas sit tortor tortor. Laoreet
                        ipsum tempus cursus ut nullam aliquet at porta aliquet.
                        Tempus nunc risus velit ullamcorper dui est nec.
                        Pellentesque commodo non sem interdum nibh tortor
                        pretium massa.
                    </Text>
                </PrivacyBox>
                <PrivacyBox>
                    <Text mb={8} fontSize={16} fontWeight={600}>
                        Conditions of use
                    </Text>
                    <Text
                        lineHeight={18}
                        textAlign="justify"
                        fontSize={12}
                        fontWeight={400}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sagittis, id pretium egestas sit tortor tortor. Laoreet
                        ipsum tempus cursus ut nullam aliquet at porta aliquet.
                        Tempus nunc risus velit ullamcorper dui est nec.
                        Pellentesque commodo non sem interdum nibh tortor
                        pretium massa.
                    </Text>
                </PrivacyBox>
                <PrivacyBox>
                    <Text mb={8} fontSize={16} fontWeight={600}>
                        License and Site Access
                    </Text>
                    <Text
                        lineHeight={18}
                        textAlign="justify"
                        fontSize={12}
                        fontWeight={400}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sagittis, id pretium egestas sit tortor tortor. Laoreet
                        ipsum tempus cursus ut nullam aliquet at porta aliquet.
                        Tempus nunc risus velit ullamcorper dui est nec.
                        Pellentesque commodo non sem interdum nibh tortor
                        pretium massa.
                    </Text>
                </PrivacyBox>
            </Container>
        </ScrollView>
    );
};

const Container = styled.View`
    flex: 1;
    background: #fff;
    padding: 16px;
`;

const PrivacyImage = styled.Image`
    ${Spacing}
    ${Size}
`;

const PrivacyBox = styled.View`
    margin-bottom: 24px;
    ${Spacing}
    ${Size}
`;

export default Privacy;
