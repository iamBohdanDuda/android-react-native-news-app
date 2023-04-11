import { HIDE_CONNECTION_ERROR_ALERT, SHOW_CONNECTION_ERROR_ALERT } from "../constants/actions";

const initialState = {
    connectionErrorAlertVisible: false
}

export const alertsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_CONNECTION_ERROR_ALERT:
            return {...state, connectionErrorAlertVisible: true};
        case HIDE_CONNECTION_ERROR_ALERT:
            return {...state, connectionErrorAlertVisible: false};
        default:
            return state;
    }
}