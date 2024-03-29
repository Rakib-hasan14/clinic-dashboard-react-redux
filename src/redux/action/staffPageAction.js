import {actionTypesStaffs} from '../actionTypes'
import axios from 'axios'


export const fetchStaffPageData = (position,sort,fromDate,toDate,search) => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend-rakib-hasan14.vercel.app/clinic/staffs?position=${position}&sorting=${sort}&fromDate=${fromDate}&toDate=${toDate}&searchKey=${search}`)

    dispatch({type: actionTypesStaffs.GET_STAFF_DATA, payload: response.data})
}  


export const fetchSingleStaffPageData = (id) => async(dispatch) => {
    const response = await axios.get(`https://clinic-management-dashboard-backend-rakib-hasan14.vercel.app/clinic/staffs/single-details?id=${id}`)
   
        dispatch({type: actionTypesStaffs.GET_SINGLE_STAFF_DATA, payload: response.data})
   
}  

export const AddStaffAction = (data) => async(dispatch) => {
    const response = await axios.post(`https://clinic-management-dashboard-backend-rakib-hasan14.vercel.app/clinic/auth/create`,data)

    dispatch({type: actionTypesStaffs.ADD_STAFF, payload: response.data})

}  


export const deleteStaffAction = (data) => async(dispatch) => {
    const response = await axios.post(`https://clinic-management-dashboard-backend-rakib-hasan14.vercel.app/clinic/doctors/delete`,data)

    dispatch({type: actionTypesStaffs.DELETE_STAFF, payload: data})

}  