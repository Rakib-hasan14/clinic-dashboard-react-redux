import {actionTypesDoctors} from '../actionTypes'
import axios from 'axios'


export const fetchDoctorPageData = (position,sort,fromDate,toDate,search,status) => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend.vercel.app/clinic/doctors?roll=${position}&accountStatus=${status}&sorting=${sort}&fromDate=${fromDate}&toDate=${toDate}&searchKey=${search}`)

    dispatch({type: actionTypesDoctors.GET_DOCTOR_DATA, payload: response.data})
}  


export const fetchSingleDoctorPageData = (id) => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend.vercel.app/clinic/doctors/single-details?id=${id}`)
   console.log(response,'ac')
        dispatch({type: actionTypesDoctors.GET_SINGLE_DOCTOR_DATA, payload: response.data})
   
}  

export const AddDoctorAction = (data) => async(dispatch) => {
    const response = await axios.post(`https://clinic-management-dashboard-backend.vercel.app/clinic/auth/create`,data)

    dispatch({type: actionTypesDoctors.ADD_DOCTOR, payload: response.data})

}  


export const deleteDoctorAction = (data) => async(dispatch) => {
    const response = await axios.post(`https://clinic-management-dashboard-backend.vercel.app/clinic/doctors/delete`,data)

    dispatch({type: actionTypesDoctors.DELETE_DOCTOR, payload: data})

}  
