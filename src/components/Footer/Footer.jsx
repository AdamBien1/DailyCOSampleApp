import React from 'react'
import { Container } from '../../helpers/UtilStyledComponents.style'
import FlexRowLayout from '../../templates/FlexRowLayout/FlexRowLayout'
import { FooterItem, StyledFooter } from './Footer.style'

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexRowLayout evenly>
                    <FooterItem color="#fff">Powered by: DailyCO</FooterItem>
                    <FooterItem color="#fff">Made by: Adam Bień</FooterItem>
                    <FooterItem color="#fff">Source Code: Github</FooterItem>
                </FlexRowLayout>
            </Container>
        </StyledFooter>
    )
}

export default Footer
