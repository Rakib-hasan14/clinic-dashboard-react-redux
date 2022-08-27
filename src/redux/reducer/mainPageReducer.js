import {actionTypesMainData} from '../actionTypes'


const mainDataState = {
    isLoading:true
}

export const mainPageReducer = (state = mainDataState, action) => {
    switch (action.type) {
        case actionTypesMainData.GET_MAIN_DATA :
            
            return {
                data:action.payload,
                isLoading:false
            }
            break;
        default:
            return {...state};
    }
}