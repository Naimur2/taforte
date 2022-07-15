import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import Screen from "../../../../components/Screen";
import { ICard } from "../../../../interfaces";
import { getTemplate } from "../../../../../DB/templates";
import ITCard from "./components/ITCard";
import { ScrollView } from "react-native";
import Button from "../../../../components/Button";

const TemplateCard = () => {
    const navigation = useNavigation();
    const [template, setTemplate] = React.useState<ICard>({});

    const params = useRoute().params as { data: ICard };

    React.useLayoutEffect(() => {
        setTemplate(getTemplate(params?.data?._id));
        navigation.setOptions({
            title: params?.data?.title,
        });
    }, [params]);

    console.log(params);
    return (
        <Screen>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    paddingVertical: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                <ITCard
                    frontImage={template?.frontImage}
                    title={"Front side"}
                />
                <ITCard frontImage={template?.backImage} title={"Back side"} />
                <Button mt={50} text="Save this template" />
            </ScrollView>
        </Screen>
    );
};

export default TemplateCard;
