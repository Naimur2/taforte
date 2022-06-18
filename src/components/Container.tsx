import React from "react";
import styled from "styled-components/native";

import { SpacingProps } from "../../../interfaces/index";
import { Spacing } from "../styled/spacing";

interface MainMenuProps {
    children: React.ReactNode;
}

export default function Container({ children }: MainMenuProps) {
    return (
        <React.Fragment>
            <Inner>{children}</Inner>
        </React.Fragment>
    );
}

const Inner = styled.View<SpacingProps>`
    ${Spacing}
    background-color: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    flex: 0.92;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 50px;
`;
