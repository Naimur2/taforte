import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Screen from "../../../components/Screen";
import FlipableCard from "../../common/FlipableCard/FlipableCard";

interface IScannedProps {
    _id: string;
    title: string;
    frontImage: string;
    backImage: string;
}

export default function Scaned() {
    const scannedCard: IScannedProps[] = [
        {
            _id: "1",
            title: "Card Title",
            frontImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-and-blue-modern-creative-business-card-design-template-925f8919f47a735f18b7f5d443f5268c_screen.jpg?ts=1594673620",
            backImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/professional-modern-blue-and-black-business-c-design-template-fb79d1a37989d5710d97165aeefdd3b8_screen.jpg?ts=1590613108",
        },
        {
            _id: "2",
            title: "Card Title",
            frontImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-and-blue-modern-creative-business-card-design-template-925f8919f47a735f18b7f5d443f5268c_screen.jpg?ts=1594673620",
            backImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/professional-modern-blue-and-black-business-c-design-template-fb79d1a37989d5710d97165aeefdd3b8_screen.jpg?ts=1590613108",
        },
        {
            _id: "3",
            title: "Card Title",
            frontImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-and-blue-modern-creative-business-card-design-template-925f8919f47a735f18b7f5d443f5268c_screen.jpg?ts=1594673620",
            backImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/professional-modern-blue-and-black-business-c-design-template-fb79d1a37989d5710d97165aeefdd3b8_screen.jpg?ts=1590613108",
        },
        {
            _id: "4",
            title: "Card Title",
            frontImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-and-blue-modern-creative-business-card-design-template-925f8919f47a735f18b7f5d443f5268c_screen.jpg?ts=1594673620",
            backImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/professional-modern-blue-and-black-business-c-design-template-fb79d1a37989d5710d97165aeefdd3b8_screen.jpg?ts=1590613108",
        },
        {
            _id: "5",
            title: "Card Title",
            frontImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/black-and-blue-modern-creative-business-card-design-template-925f8919f47a735f18b7f5d443f5268c_screen.jpg?ts=1594673620",
            backImage:
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/professional-modern-blue-and-black-business-c-design-template-fb79d1a37989d5710d97165aeefdd3b8_screen.jpg?ts=1590613108",
        },
    ];

    return (
        <Screen pt={30}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 16,
                }}
                showsVerticalScrollIndicator={false}
            >
                {scannedCard?.map((card) => (
                    <FlipableCard
                        key={card._id + Date.now().toLocaleString()}
                        frontImage={card.frontImage}
                        backImage={card.backImage}
                    />
                ))}
            </ScrollView>
        </Screen>
    );
}

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const ImagContainer = styled.Pressable`
    height: 200px;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
`;
