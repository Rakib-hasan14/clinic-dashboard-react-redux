import {actionTypesAccounts} from '../actionTypes'



const accountDataState = {
    data: [],
    isLoading:true,
    status: null,
    error:false
}


const accountAllDataState = {
    doctor: [],
    staff: [],
    admin: [],
    isLoading:true,
    status: null,
    error:false
}

const AddPaymentDataState = {
    message:'',
    status:null
}

export const accountReducer = (state = accountDataState, action) => {
    switch (action.type) {
        case actionTypesAccounts.GET_ACCOUNT_DATA:

            return {
                data: action.payload.data,
                status:action.payload.status,
                error:action.payload.status == false ? action.payload.error : null,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}


export const accountAllReducer = (state = accountAllDataState, action) => {
    switch (action.type) {
        case actionTypesAccounts.GET_ACCOUNT_ALL_DATA:

            return {
                doctor: action.payload.doctor.data,
                staff: action.payload.staff.data,
                admin: action.payload.data,
                status:action.payload.status,
                error:action.payload.status == false ? action.payload.error : null,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}

export const addPaymentReducer = (state = AddPaymentDataState, action) => {
    switch (action.type) {
        case actionTypesAccounts.ADD_TRX:
            return {
                message:action.payload.message,
                status: action.payload.status
            }
            break;
        default:
            return {...state};
    }
}