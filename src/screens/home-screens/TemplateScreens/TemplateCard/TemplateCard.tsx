import { useRoute } from "@react-navigation/native";
import React from "react";
import Screen from "../../../../components/Screen";
import { ICard } from "../../../../interfaces";

const TemplateCard = () => {
    const params = useRoute().params as { data: ICard };
    console.log(params);
    return <Screen></Screen>;
};

export default TemplateCard;
