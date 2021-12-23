import {setAppError, SetAppErrorType, setAppStatusAC, SetAppStatusACType} from "../app/app-reducer";
import {Dispatch} from "redux";
import {addTaskAC} from "../features/TodolistsList/tasks-reducer";

export const HandleServerNetworkError = (dispatch: Dispatch<ErrorType>, message: string) => {
    dispatch(setAppError(message))
    dispatch(setAppStatusAC('failed'))
}

export const HandleServerAppError = (dispatch: Dispatch<ErrorType>,data:ResponseType)=>{
    if (data.resultCode === 0) {
        const task = data.data.item
        const action = addTaskAC(task)
        dispatch(action)

    } else {
        if (data.messages.length) {
            dispatch(setAppError(data.messages[0]))
        } else {
            dispatch(setAppError('Some error'))
        }
    }
}

type ErrorType = | SetAppStatusACType | SetAppErrorType