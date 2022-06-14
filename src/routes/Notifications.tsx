import React from "react";
import { View, Text } from "react-native";
import { TabProps } from "../interfaces/index";

export default function Notifications(props: TabProps) {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Notifications!</Text>
        </View>
    );
}
