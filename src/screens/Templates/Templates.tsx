import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import allTemplates from "../../../DB/templates";
import Screen from "../../components/Screen";
import { ITemplateProps } from "../../interfaces/index";
import HTemplates from "./components/HTemplates";

export default function Templates() {
    const [templates, setTemplates] = React.useState<ITemplateProps[]>([]);

    React.useEffect(() => {
        setTemplates(allTemplates);
    }, []);

    return (
        <Screen>
            <ScrollView
                contentContainerStyle={{
                    paddingVertical: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                {templates?.map((item) => (
                    <HTemplates
                        templates={item.templates}
                        title={item.name}
                        onNext={() => {}}
                        onCardPress={(t) => console.log(t)}
                    />
                ))}
            </ScrollView>
        </Screen>
    );
}

const HStack = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const HView = styled.View``;
