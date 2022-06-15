export interface CardItems {
    icon: string;
    title: string;
    description?: string;
    backgroundColor?: string;
    innerBackgroundColor?: string;
    borderColor?: string;
    iconColor?: string;
    onPress?: () => void;
}

export interface MenuCardprops {
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    backgroundColor?: string;
    bg?: string;
}
