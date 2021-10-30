import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components';
import { Themes } from "../../helpers/AlertTypeThemes.style"
import { Overlay } from '../../helpers/UtilStyledComponents.style';
import useLockBodyScroll from '../../hooks/UseLockBodyScroll';
import AlertContext from '../../context/Alert/alertContext';
import { CloseIcon, AlertContainer, AlertHeader, AlertMessage } from './Alert.style';

const Alert = () => {
        // Context
        const alertContext = useContext(AlertContext)
        const { alert, clearAlert } = alertContext;

        // Lifecycle
        useLockBodyScroll(alert.active, [alert.active]);

        if(alert.active) {
            return (
                <ThemeProvider theme={Themes[alert.type+"Theme"]}>
                        <AlertContainer>
                            <AlertHeader>
                                {alert.header}
                                <CloseIcon onClick={clearAlert} />
                            </AlertHeader>
                            <AlertMessage>
                                {alert.message}
                            </AlertMessage>
                        </AlertContainer>   
                </ThemeProvider>
            )
        } else {
            return <></>
        }
}

export default Alert
