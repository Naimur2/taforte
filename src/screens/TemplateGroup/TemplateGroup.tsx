import { useRoute } from "@react-navigation/native";
import React from "react";
import Screen from "../../components/Screen";
import { ICard } from "../../interfaces";
import { filterdTemplates } from "../../../DB/templates";
import styled from "styled-components/native";
import Tcard from "./components/Tcard";
import { ScrollView } from "react-native";

export default function TemplateGroup() {
    const [templates, setTemplates] = React.useState<ICard[]>([]);

    const params = useRoute().params as { group: string };
    React.useLayoutEffect(() => {
        setTemplates(filterdTemplates(params.group));
    }, [params]);
    console.log(templates);
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
