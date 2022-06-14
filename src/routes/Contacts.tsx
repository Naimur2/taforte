import React from "react";
import { View, Text } from "react-native";
import { TabProps } from "../interfaces";

export default function Contacts(props: TabProps) {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Contacts!</Text>
        </View>
    );
}
