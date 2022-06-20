type StrOrNum = string | number;

type CheckAndGetPercentage = (value: StrOrNum) => string;

export const checkAndGetPercentage: CheckAndGetPercentage = (
    value: StrOrNum
) => {
    if (typeof value === "string" && value.includes("%")) return value;
    return `${value}px`;
};

type MarginPadding = (value: StrOrNum) => string;

export const getMarginPadding: MarginPadding = (value: StrOrNum) => {
    if (typeof value === "string" && value === "auto") {
        return "auto";
    }

    return checkAndGetPercentage(value);
};
