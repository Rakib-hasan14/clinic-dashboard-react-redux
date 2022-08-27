import {actionTypesAccounts} from '../actionTypes'
import axios from 'axios'


export const fetchAccountPageData = () => async(dispatch) => {
    const response = await axios.get(`https://clinic-managements.herokuapp.com/clinic/account`)

    dispatch({type: actionTypesAccounts.GET_ACCOUNT_DATA, payload: response.data})
}  


export const fetchAllData = () => async(dispatch) => {
    const staff = await axios.get(`https://clinic-managements.herokuapp.com/clinic/staffs`)
    const doctor = await axios.get(`https://clinic-managements.herokuapp.com/clinic/doctors`)


    const data = {
        staff: staff.data,
        doctor: doctor.data
    }

    dispatch({type: actionTypesAccounts.GET_ACCOUNT_ALL_DATA, payload: data})
}  


export const AddPaymentAction = (data) => async(dispatch) => {
    const response = await axios.post(`https://clinic-managements.herokuapp.com/clinic/account/send`,data)

    dispatch({type: actionTypesAccounts.ADD_TRX, payload: response.data})

}  
