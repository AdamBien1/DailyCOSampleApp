import { css } from "styled-components"

export const sharedIconStyles = css`
position: relative;
display: inline-block;
width: 1.5rem;
height: 1.5rem;
color: #fff;
margin: 0 .5rem;
cursor: pointer;
transition: opacity 300ms ease-in;

&:hover {
    opacity: .8;
}
`
