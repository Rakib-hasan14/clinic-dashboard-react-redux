import {actionTypesPateints} from '../actionTypes'
import axios from 'axios'


export const fetchPateintPageData = (position,sort,fromDate,toDate,search) => async(dispatch) => {
    const response = await axios.get(`https://clinic-managements.herokuapp.com/clinic/pateints?status=${position}&fromDate=${fromDate}&toDate=${toDate}&searchKey=${search}`)

    dispatch({type: actionTypesPateints.GET_PATEINT_DATA, payload: response.data.data})
}  


export const fetchSinglePateintPageData = (id) => async(dispatch) => {
    const response = await axios.get(`https://clinic-managements.herokuapp.com/clinic/pateints/single-details?id=${id}`)

    dispatch({type: actionTypesPateints.GET_SINGLE_PATEINT_DATA, payload: response.data})
}  

export const AddPateintAction = (data) => async(dispatch) => {
    const response = await axios.post(`https://clinic-managements.herokuapp.com/clinic/pateints/add`,data)

    dispatch({type: actionTypesPateints.ADD_PATEINT, payload: response.data})

}  


export const deletePateintAction = (data) => async(dispatch) => {
    const response = await axios.post(`https://clinic-managements.herokuapp.com/clinic/pateints/delete`,data)

    dispatch({type: actionTypesPateints.DELETE_PATEINT, payload: data})

}  
