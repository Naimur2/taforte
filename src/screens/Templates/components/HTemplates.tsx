import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Stitle from "./Stitle";
import SCard from "./SCard";
import { ICard } from "../../../interfaces/index";
import { Spacing } from "../../../styled/spacing";

export default function HTemplates({
    templates,
    title,
    onNext,
    onCardPress,
}: {
    templates: ICard[];
    title: string;
    onNext: () => void;
    onCardPress: (card: ICard) => void;
}) {
    return (
        <View>
            <Stitle title={title} onPress={onNext} />
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <HStack>
                    {templates.map((template, idx) => (
                        <SCard
                            image={template?.image}
                            title={template?.title}
                            onPress={() => onCardPress(template)}
                            key={template?._id || idx}
                        />
                    ))}
                </HStack>
            </ScrollView>
        </View>
    );
}

const HStack = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const View = styled.View`
    ${Spacing}
`;
