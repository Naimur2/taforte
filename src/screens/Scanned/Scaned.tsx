import React from "react";
import { ScrollView } from "react-native-gesture-handler";

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
    ];

    return <ScrollView></ScrollView>;
}
