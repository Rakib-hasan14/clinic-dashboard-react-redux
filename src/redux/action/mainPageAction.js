import {actionTypesMainData} from '../actionTypes'
import axios from 'axios'


export const fetchMainPageData = () => async (dispatch) => {
    const response = await axios.get('https://clinic-managements.herokuapp.com/clinic/main')

    dispatch({type:actionTypesMainData.GET_MAIN_DATA, payload: response.data})
}  
