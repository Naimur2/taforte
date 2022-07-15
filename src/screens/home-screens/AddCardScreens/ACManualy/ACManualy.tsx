import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import { filterTemplatesById } from "../../../../../DB/templateInputs";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Screen from "../../../../components/Screen";
import { IAddCardFieldProps, ICard } from "../../../../interfaces/index";
import { KeyboardView } from "../../../../styled";
import { Spacing } from "../../../../styled/spacing";
import { Text } from "../../../../styled/typography";
import { useFormik } from "formik";

const ACManualy = () => {
    const params = useRoute().params as { data: ICard };
    const navigation = useNavigation();

    const [inputFields, setInputFields] = React.useState<IAddCardFieldProps[]>(
        []
    );

    React.useLayoutEffect(() => {
        try {
            setInputFields(filterTemplatesById(params?.data?._id));
            navigation.setOptions({
                title: params?.data?.title,
            });
        } catch (error) {
            console.log(error);
        }
    }, [params]);

    const backInputs = inputFields?.filter((input) => input.type === "back");
    const frontInputs = inputFields?.filter((input) => input.type === "front");

    const initialValues = {};

    const formik = useFormik({
        initialValues,
        onSubmit: (data) => console.log(data),
    });
    const getInputName = (label: sting): string => {
        const splitedLabel = label.trim().split(" ");
        const firstWord = splitedLabel[0].toLowerCase();
        const secondWord = splitedLabel.slice(1).join(" ");
        return `${firstWord}${secondWord}`;
    };

    return (
        <Screen>
            <KeyboardView showsVerticalScrollIndicator={false}>
                <InnerView px={16} mt={16}>
                    <Text mt={20} mb={16} fontWeight={700} fontSize={20}>
                        Card front side info
                    </Text>
                    {frontInputs?.map((input) => (
                        <Input
                            key={input._id}
                            label={input.label}
                            placeholder={input.placeholder}
                            value={formik.values[getInputName(input?.label)]}
                            onChangeText={formik.handleChange(
                                getInputName(input?.label)
                            )}
                            error={formik.errors[getInputName(input?.label)]}
                        />
                    ))}
                    <Text mt={30} mb={16} fontWeight={700} fontSize={20}>
                        Card back side info
                    </Text>
                    {backInputs?.map((input) => (
                        <Input
                            key={input._id}
                            label={input.label}
                            placeholder={input.placeholder}
                            value={formik.values[getInputName(input?.label)]}
                            onChangeText={formik.handleChange(
                                getInputName(input?.label)
                            )}
                            error={formik.errors[getInputName(input?.label)]}
                        />
                    ))}

                    <Button
                        onPress={formik.handleSubmit}
                        mt={30}
                        mb={20}
                        text="Save"
                    />
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
