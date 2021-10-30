import { SET_ALERT, CLEAR_ALERT } from "../types";

const alertReducer = (state, action) => {
    switch(action.type) {
        case SET_ALERT:
            return {
                alert: action.payload
            }
        case CLEAR_ALERT:
            return {
                alert: {
                    active: false,
                    type: undefined,
                    autoclear: false,
                    header: "",
                    message: "",
                }
            }
        default:
            return state;
    }
}

export default alertReducer;