import {actionTypesPateints} from '../actionTypes'

const pateintDataState = {
    data: [],
    isLoading:true
}
const singlePateintDataState = {
    data:{},
    isLoading:true
}
const AddPateintDataState = {
    message:'',
    status:null
}

export const pateintReducer = (state = pateintDataState, action) => {
    switch (action.type) {
        case actionTypesPateints.GET_PATEINT_DATA:
            console.log(action.payload,'ac')
            return {
                data: action.payload,
                isLoading:false
            }
            break;
        case actionTypesPateints.DELETE_PATEINT:
            const data = state.data.filter(item => item._id !== action.payload._id)
            return {
                data: data,
            }
            break;
        default:
            return {...state};
    }
}

export const singlePateintReducer = (state = singlePateintDataState, action) => {
    switch (action.type) {
        case actionTypesPateints.GET_SINGLE_PATEINT_DATA:
            return {
                data: action.payload,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}

export const addPateintReducer = (state = AddPateintDataState, action) => {
    switch (action.type) {
        case actionTypesPateints.ADD_PATEINT:
            return {
                message:action.payload.message,
                status: action.payload.status
            }
            break;
        default:
            return {...state};
    }
}