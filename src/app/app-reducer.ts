export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'succeeded' as RequestStatusType,
    isError: null as string|null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state,isError: action.error}
        default:
            return state
    }
}

type ActionsType = SetAppStatusACType | SetAppErrorType

export type SetAppStatusACType = ReturnType<typeof setAppStatusAC>
export const setAppStatusAC = (status:RequestStatusType)=>{
    return{
        type:'APP/SET-STATUS', status
    }as const
}
export type SetAppErrorType = ReturnType<typeof setAppError>
export const setAppError = (error:string|null)=>{
    return{
        type:'APP/SET-ERROR',error
    } as const
}

