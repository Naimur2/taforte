import React from "react";
import { ScrollView, StyleSheet } from "react-native";

interface Props {
    children: React.ReactNode;
    horizontal?: boolean;
    vertical?: boolean;
}

export default function CScrollView({ children, horizontal, vertical }: Props) {
    return (
        <React.Fragment>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={horizontal}
                contentContainerStyle={
                    horizontal ? styles.horizontal : styles.vertical
                }
            >
                {children}
            </ScrollView>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    vertical: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});
