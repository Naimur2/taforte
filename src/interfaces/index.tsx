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

export interface TabProps {
    navigate: any;
}

export interface TabIcon {
    [key: string]: {
        active: string;
        inactive: string;
    };
}
