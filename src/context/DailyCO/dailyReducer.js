import { GET_ROOM } from "../types";

const dailyReducer = (state, action) => {
    switch(action.type) {
        case GET_ROOM:
            return {
                ...state,
                room: action.payload
            }
        default:
            return state;
    }
}

export default dailyReducer;