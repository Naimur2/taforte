import React from "react";

import Screen from "../../components/Screen";
import IconCard from "../../components/IconCard";

const AddCard: React.FC = () => {
    return (
        <Screen title={"Add Card"} leftIcon={true}>
            <IconCard iconName="card-edit" tittle="Import from Gallery" />
        </Screen>
    );
};

export default AddCard;
