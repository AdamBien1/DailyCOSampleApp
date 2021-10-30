import styled from "styled-components"
import { TimesCircle } from "@styled-icons/fa-regular/TimesCircle";
import { LeadingText, SubText } from "../../helpers/UtilStyledComponents.style";
import { sharedIconStyles } from "../../helpers/SharedStyles.style";

export const AlertContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: .5rem 1rem;
    background-color: ${props => props.theme.backgroundColor};
    color: #444;
    text-shadow: 1px 1px #aaa;
    box-shadow: 5px 4px 10px -5px rgba(0, 0, 0, 0.6);
    width: auto;

    border-radius: 15px;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`

export const AlertHeader = styled(LeadingText)`
    position: relative;
    color: inherit;
    padding: .25rem;
`

export const AlertMessage = styled(SubText)`
    color: inherit;
    padding: .5rem;
`

export const CloseIcon = styled(TimesCircle)`
    ${sharedIconStyles}

    max-width: 2rem;
    max-height: 2rem;
    color: inherit;

    position: absolute;
    top:-10px;
    right: -10px;
`