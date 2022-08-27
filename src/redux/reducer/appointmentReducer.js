import {actionTypesAppointment} from '../actionTypes'

const appointDataState = {
    data: [],
    isLoading:true,
    status: null,
    error:false
}

const appointFetchData = {
    category: [],
    doctor: [],
    isLoading:true,
    status: null,
    error:false
}

const appointPateintFetchData = {
    pateint: [],
    isLoading:true,
    status: null,
    error:false
}

const makeDoneState = {
    message:'',
    status:null
}

const AddAppointDataState = {
    message:'',
    status:null
}

export const appointReducer = (state = appointDataState, action) => {
    switch (action.type) {
        case actionTypesAppointment.GET_APPOINT_DATA:

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

export const appointFetchReducer = (state = appointFetchData, action) => {
    switch (action.type) {
        case actionTypesAppointment.GET_APPOINT_CATEGORY_DATA:

            return {
                category: action.payload.data,
                doctor: state.doctor,
                status:action.payload.status,
                error:action.payload.status == false ? action.payload.error : null,
                isLoading:false
            }
            break;
        case actionTypesAppointment.GET_APPOINT_DOCTOR_DATA:

            return {
                category: state.category,
                doctor: action.payload.data,
                status:action.payload.status,
                error:action.payload.status == false ? action.payload.error : null,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}

export const appointPateintReducer = (state = appointPateintFetchData, action) => {
    switch (action.type) {
        case actionTypesAppointment.GET_APPOINT_PATEINT_DATA:

            return {
                pateint: action.payload.data,
                status:action.payload.status,
                error:action.payload.status == false ? action.payload.error : null,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}

export const appointMakeDone = (state = makeDoneState, action) => {
    switch (action.type) {
        case actionTypesAppointment.MAKE_DONE:

            return {
                message: action.payload.message,
                status: action.payload.status,
            }
            break;
        default:
            return {...state};
    }
}

export const addAppointReducer = (state = AddAppointDataState, action) => {
    switch (action.type) {
        case actionTypesAppointment.ADD_APPOINT:
            return {
                message:action.payload.message,
                status: action.payload.status
            }
            break;
        default:
            return {...state};
    }
}