interface Fonts {
    [key: string]: {
        [key: string | number]: string;
    };
}

const fonts: Fonts = {
    Montserrat: {
        300: "Montserrat_300Light",
        400: "Montserrat_400Regular",
        600: "Montserrat_600SemiBold",
    },
    Inter: {
        100: "Inter_100Thin",
        200: "Inter_200ExtraLight",
        300: "Inter_300Light",
        400: "Inter_400Regular",
        500: "Inter_500Medium",
        600: "Inter_600SemiBold",
        700: "Inter_700Bold",
        bold: "Inter_700Bold",
        800: "Inter_800ExtraBold",
        900: "Inter_900Black",
    },
};

export default fonts;
