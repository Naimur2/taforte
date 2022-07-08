import React from "react";
import { Platform } from "react-native";

export default function usePlatform() {
    const [platform, setPlatform] = React.useState(Platform.OS);
    React.useEffect(() => {
        let clean = false;
        setPlatform(Platform.OS);
        return () => {
            clean = true;
        };
    }, [Platform.OS]);
    return platform;
}
