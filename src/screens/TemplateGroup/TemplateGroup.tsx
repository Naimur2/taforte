import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { filterdTemplates } from "../../../DB/templates";
import Screen from "../../components/Screen";
import { ICard } from "../../interfaces";
import Tcard from "./components/Tcard";

export default function TemplateGroup() {
    const navigation = useNavigation();
    const [templates, setTemplates] = React.useState<ICard[]>([]);

    const params = useRoute().params as { group: string; title: string };

    React.useLayoutEffect(() => {
        setTemplates(filterdTemplates(params.group));
        navigation.setOptions({
            title: params.title,
        });
    }, [params]);

    return (
        <Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingVertical: 20,
                    paddingHorizontal: 16,
                }}
            >
                {templates?.map((item, index) => (
                    <Tcard key={index} {...item} />
                ))}
            </ScrollView>
        </Screen>
    );
}
