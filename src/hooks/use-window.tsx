import React from "react";
import { Dimensions } from "react-native";

export default function useWindow() {
    const { width, height } = Dimensions.get("window");

    return { width, height };
}
