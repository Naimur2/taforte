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
