import {actionTypesStaffs} from '../actionTypes'

const staffDataState = {
    data: [],
    isLoading:true,
    status: null,
    error:false
}
const singleStaffDataState = {
    data:[],
    isLoading:true
}
const AddStaffDataState = {
    message:'',
    status:null
}

export const staffReducer = (state = staffDataState, action) => {
    switch (action.type) {
        case actionTypesStaffs.GET_STAFF_DATA:

            return {
                data: action.payload.data,
                status:action.payload.status,
                error:action.payload.status == false ? action.payload.error : null,
                isLoading:false
            }
            break;
        case actionTypesStaffs.DELETE_STAFF:
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

export const singleStaffReducer = (state = singleStaffDataState, action) => {
    switch (action.type) {
        case actionTypesStaffs.GET_SINGLE_STAFF_DATA:
            return {
                data: action.payload,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}

export const addStaffReducer = (state = AddStaffDataState, action) => {
    switch (action.type) {
        case actionTypesStaffs.ADD_STAFF:
            return {
                message:action.payload.message,
                status: action.payload.status
            }
            break;
        default:
            return {...state};
    }
}