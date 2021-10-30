import styled, { css } from "styled-components";

export const FlexRow = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-items: flex-start;
    
    ${props => props.evenly && css`
        align-content: space-evenly;
        justify-items: center;
    `}
    /* @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 300px);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 300px);
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1,300px);
    } */
`