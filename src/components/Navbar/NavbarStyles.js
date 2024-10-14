import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../mockups/Mockups";

export const NavbarContainer = styled(ContainerStyled)`
    height: 80px;
    position: fixed;
    top: 0;
    z-index: 1000;
`

export const NavbarWrapper = styled(WrapperStyled)`
    height: 100%;
    align-items: center;
    justify-content: space-between;
    img {
        height: 50%;
    }

    .icon-menu {
        display: none;
        @media (max-width: 768px) {
            display: block;
            font-size: 25px;
        }
    }
`

export const NavbarList = styled.ul`
    display: flex;
    gap: 30px;
    li a {
        color: antiquewhite;
        text-transform: uppercase;
    }

    @media (max-width: 768px) {
        display: none;
    }
`