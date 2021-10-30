import React, { useReducer } from "react";
import DailyIframe from '@daily-co/daily-js';
import AlertReducer from "./alertReducer"
import AlertContext from "./alertContext"
import { SET_ALERT, CLEAR_ALERT } from "../types";

const AlertState = props => {
    const initialState = {
        alert: {
            active: false,
            type: undefined,
            header: "",
            message: "",
        },
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = ({ type, header, message }) => {
        let payload = {
            active: true,
            type,
            header,
            message
        }

        dispatch({
            type: SET_ALERT,
            payload: payload,
        })
    }

    const clearAlert = () => {
        dispatch({
            type: CLEAR_ALERT
        })
    }

    return <AlertContext.Provider
                value={{
                    alert: state.alert,

                    setAlert: setAlert,
                    clearAlert: clearAlert,
                }}
            >
                {props.children}
            </AlertContext.Provider>
}

export default AlertState;
