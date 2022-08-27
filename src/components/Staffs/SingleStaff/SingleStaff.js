import React,{useEffect} from 'react';
import styled from '@emotion/styled';
import { Box , Grid , Typography , Button} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import { useParams } from 'react-router-dom'
import { useSelector  , useDispatch} from 'react-redux'
import {fetchSingleStaffPageData} from "../../../redux/action/staffPageAction"
import CircularProgress from '@mui/material/CircularProgress';


const WrapBox = styled(Box)({
    width: '78%',
    minHeight: '100vh',
    position: 'absolute',
    backgroundColor: '#dddcdc',
    marginTop: "64px",
    display: "flex",
    marginLeft: "22%"
})
const ContainerBox = styled(Box)({
    width: '95%',
    margin: '20px auto'
})
const InfoBox = styled(Box)({
    marginTop: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
})


const SingleStaff = () => {
    const staffPage = useSelector((state)=> state.singleStaffReducer)
    const staff = staffPage.data.data
    const dispatch = useDispatch()
    console.log(staffPage)

    const {id} = useParams()

    useEffect(()=> {
            dispatch(fetchSingleStaffPageData(id))
    },[])



    return (
        <WrapBox>
            <ContainerBox>
                <Grid container>
                    <Grid item xs={6}  md={6}>
                        <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700'}}>Staffs Informations</Typography>
                        <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span> <Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/staffs'>Staffs</Typography> <span><ArrowRightIcon /></span> Details</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} textAlign='right'>
                        <Button sx={{ marginRight: "5px" }} component={Link} to='/update-staff' variant="contained">Update</Button>
                        <Button component={Link} to='/delete-staff' variant="contained">Delete</Button>
                    </Grid>
                </Grid>
                <InfoBox>
                    <ContainerBox>
                        <Box textAlign='right'>
                            <Typography textAlign='center' py={2} sx={{ color: "gray" }} variant="h4">Informations</Typography>
                            <Divider/>
                            {staffPage.isLoading === true && <Typography variant='h5' sx={{color:'#1a237e', margin: '10px auto',width:'100%',textAlign: 'center' }}><CircularProgress disableShrink /></Typography>}
                            {
                                staffPage.isLoading === false && <Box sx={{ width: 400 , margin: "auto" }} py={3} textAlign='center'>
                                <Typography variant="h6">Name: {staff.name}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Email: {staff.email}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Gender: {staff.gender}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Status: {staff.status}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Age: {staff.age}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Address: {staff.address}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Phone Number: {staff.number}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Staff Position: {staff.staffPosition}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Account Status: {staff.accountStatus}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                                <Typography variant="h6">Roll: {staff.roll}</Typography>
                                    <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                            </Box>
                            }
                            
                        </Box>
                    </ContainerBox>
                </InfoBox>
            </ContainerBox>
        </WrapBox>
    );
};

export default SingleStaff;