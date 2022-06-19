type StrOrNum = string | number;

type CheckAndGetPercentage = (value: StrOrNum) => string;

export const checkAndGetPercentage: CheckAndGetPercentage = (
    value: StrOrNum
) => {
    if (typeof value === "string") {
        if (value.includes("%")) {
            return value;
        }
        return `${value}px`;
    }
    return `${value}px`;
};
