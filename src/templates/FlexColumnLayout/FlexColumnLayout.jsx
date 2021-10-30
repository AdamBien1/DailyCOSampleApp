import React from 'react'
import { Container, SubText } from '../../helpers/UtilStyledComponents.style'
import { FlexColumn } from './FlexColumnLayout.style'

const FlexColumnLayout = ({ children, loading, centered = false }) => {
    if(loading) {
        return (
            <SubText>Loading...</SubText>
        )
    } else {
        return (
            <FlexColumn layout={centered}>
                {children}
            </FlexColumn>
        )
    }
}

export default FlexColumnLayout
