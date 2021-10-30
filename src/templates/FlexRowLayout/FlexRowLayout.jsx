import React from 'react'
import { SubText } from '../../helpers/UtilStyledComponents.style'
import { FlexRow } from './FlexRowLayout.style'

const FlexRowLayout = ({ children, loading, evenly = false }) => {
    if(loading) {
        return (
            <SubText>Loading...</SubText>
        )
    } else {
        return (
            <FlexRow evenly={evenly}>
                {children}
            </FlexRow>
        )
    }
}

export default FlexRowLayout
