import { AlertsAction, AlertsActionTypes, AlertsState } from "./types/alerts";


const initialState: AlertsState = {
    connectionErrorAlertVisible: false
}

export const alertsReducer = (state = initialState, action: AlertsAction): AlertsState => {
    switch (action.type) {
        case AlertsActionTypes.SHOW_CONNECTION_ERROR_ALERT:
            return {...state, connectionErrorAlertVisible: true};
        case AlertsActionTypes.HIDE_CONNECTION_ERROR_ALERT:
            return {...state, connectionErrorAlertVisible: false};
        default:
            return state;
    }
}