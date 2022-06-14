import React from "react";
import { Text, View } from "react-native";
import { TabProps } from "../interfaces/index";

export default function Profile({ props: TabProps }) {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings!</Text>
        </View>
    );
}
