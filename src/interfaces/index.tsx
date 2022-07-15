export interface SpacingProps {
    p?: number;
    m?: number;
    style?: any;
    px?: number;
    py?: number;
    mx?: number;
    my?: number;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
    ml?: number;
    mr?: number;
    mt?: number;
    mb?: number;
}

export interface SizeProps {
    width?: number | string;
    height?: number | string;
}

export interface TabProps {
    navigate: any;
}

export interface TabIcon {
    [key: string]: {
        active: string;
        inactive: string;
    };
}
export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    onPress?: () => void;
}

export interface ICollapsibleProps {
    title?: string;
    text?: string;
}
export interface ICard {
    _id?: string;
    title?: string;
    frontImage?: string;
    backImage?: string;
    onPress?: () => void;
    group?: string;
}

export interface ITemplateProps {
    _id: string;
    name: string;
    templates: ICard[];
    group: string;
}

export interface IZoomViewProps {
    images: string[];
    isVisible: boolean;
    onClose: () => void;
}

export interface  IAddCardFieldProps {
    _id: string;
    label: string;
    placeholder: string;
    templateId?: string;
    order?: number;
} {