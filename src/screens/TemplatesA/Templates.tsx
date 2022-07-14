import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import allTemplates from "../../../DB/templates";
import Screen from "../../components/Screen";
import { ITemplateProps } from "../../interfaces/index";
import HTemplates from "./components/HTemplates";

export default function Templates() {
    const navigation = useNavigation();
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
                {templates?.map((item, index) => (
                    <HTemplates
                        key={index}
                        templates={item.templates}
                        title={item.name}
                        onNext={() =>
                            navigation.navigate("TempGroup", {
                                group: item.group,
                                title: item.name,
                            })
                        }
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
