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
import { insertIntoMyCards } from "../../../../../DB/my-cards";

interface IADDprops extends IAddCardFieldProps {
    value: string;
    userId: string;
}
interface IProps {
    [key: string]: IADDprops;
}

const ACManualy = () => {
    const params = useRoute().params as { data: ICard };
    const navigation = useNavigation();

    const [values, setValues] = React.useState<IProps>({});

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

    const handleChange = (value: string, field: IAddCardFieldProps) => {
        const key = field.key;
        const newValues = { ...field, value, userId: "1" };
        setValues((prev) => ({ ...prev, [key]: newValues }));
    };

    const backInputs = inputFields?.filter((input) => input.type === "back");
    const frontInputs = inputFields?.filter((input) => input.type === "front");

    const handleSubmit = () => {
        const cardInputValues = Object.values(values);
        const cardInfo = params?.data;

        const newData = {
            ...cardInfo,
            userId: "1",
            cardId: cardInfo._id,
            inputs: cardInputValues,
        };
        insertIntoMyCards(newData);
        navigation.navigate("MyCard");
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
                            value={values?.[input.key]?.value}
                            onChangeText={(value) => handleChange(value, input)}
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
                            value={values?.[input.key]?.value}
                            onChangeText={(value) => handleChange(value, input)}
                        />
                    ))}

                    <Button
                        onPress={handleSubmit}
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

export default ACManualy;
