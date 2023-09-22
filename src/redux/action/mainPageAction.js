import {actionTypesMainData} from '../actionTypes'
import axios from 'axios'


export const fetchMainPageData = () => async (dispatch) => {
    const response = await axios.get('https://clinic-management-dashboard-backend.vercel.app//clinic/main')

    dispatch({type:actionTypesMainData.GET_MAIN_DATA, payload: response.data})
}  
