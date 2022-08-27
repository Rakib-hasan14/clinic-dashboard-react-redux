import {actionTypesDoctors} from '../actionTypes'

const doctoreDataState = {
    data: [],
    isLoading:true,
    status: null,
    error:false
}
const singleDoctorDataState = {
    data:[],
    isLoading:true
}
const AddDoctorDataState = {
    message:'',
    status:null
}

export const doctorReducer = (state = doctoreDataState, action) => {
    switch (action.type) {
        case actionTypesDoctors.GET_DOCTOR_DATA:

            return {
                data: action.payload.data,
                status:action.payload.status,
                error:action.payload.status == false ? action.payload.error : null,
                isLoading:false
            }
            break;
        case actionTypesDoctors.DELETE_DOCTOR:
            const data = state.data.filter(item => item._id !== action.payload.id)
            return {
                data: data,
                status: true,
                error: null,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}

export const singleDoctorReducer = (state = singleDoctorDataState, action) => {
    switch (action.type) {
        case actionTypesDoctors.GET_SINGLE_DOCTOR_DATA:
            return {
                data: action.payload,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}

export const addDoctorReducer = (state = AddDoctorDataState, action) => {
    switch (action.type) {
        case actionTypesDoctors.ADD_DOCTOR:
            return {
                message:action.payload.message,
                status: action.payload.status
            }
            break;
        default:
            return {...state};
    }
}