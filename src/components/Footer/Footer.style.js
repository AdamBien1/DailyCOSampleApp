import styled from "styled-components"
import { SubText } from "../../helpers/UtilStyledComponents.style"

export const StyledFooter = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;

    display: block;
    background: #00b8e6;
    width: 100%;
    height: 40px;
`

export const FooterItem = styled(SubText)`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;  // Vertical Alignment to center
    text-align: center;
`

