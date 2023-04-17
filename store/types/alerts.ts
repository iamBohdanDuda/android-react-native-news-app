export enum AlertsActionTypes {
    HIDE_CONNECTION_ERROR_ALERT = 'HIDE_CONNECTION_ERROR_ALERT',
    SHOW_CONNECTION_ERROR_ALERT = 'SHOW_CONNECTION_ERROR_ALERT'
}

export interface ShowConnectionErrorAlert {
    type: AlertsActionTypes.SHOW_CONNECTION_ERROR_ALERT
}
export interface HideConnectionErrorAlert {
    type: AlertsActionTypes.HIDE_CONNECTION_ERROR_ALERT
}

export type AlertsAction = ShowConnectionErrorAlert | HideConnectionErrorAlert

export interface AlertsState {
    connectionErrorAlertVisible: boolean
}