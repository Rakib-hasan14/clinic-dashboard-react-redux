import {actionTypesAppointment} from '../actionTypes'
import axios from 'axios'


export const fetchAppointPageData = (category,status,doctor,date) => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend.vercel.app//clinic/appointment?category=${category}&status=${status}&doctor=${doctor}&date=${date}`)

    dispatch({type: actionTypesAppointment.GET_APPOINT_DATA, payload: response.data})
}  

export const fetchCategoryData = () => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend.vercel.app//clinic/appointment/category`)

    dispatch({type: actionTypesAppointment.GET_APPOINT_CATEGORY_DATA, payload: response.data})
}  

export const fetchDoctorData = () => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend.vercel.app//clinic/doctors?accountStatus=active&sorting=desc`)

    dispatch({type: actionTypesAppointment.GET_APPOINT_DOCTOR_DATA, payload: response.data})
}  

export const fetchPateintData = (search) => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend.vercel.app//clinic/pateints?status=active&searchKey=${search}`)

    dispatch({type: actionTypesAppointment.GET_APPOINT_PATEINT_DATA, payload: response.data})
}  

export const makeDone = (id) => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend.vercel.app//clinic/appointment/done?id=${id}`)

    dispatch({type: actionTypesAppointment.MAKE_DONE , payload: response.data})
}  

export const AddAppointAction = (data) => async(dispatch) => {
    const response = await axios.post(`https://clinic-management-dashboard-backend.vercel.app//clinic/appointment/add`,data)

    dispatch({type: actionTypesAppointment.ADD_APPOINT, payload: response.data})

} 