import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import { Box , Grid , Typography , Button} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import { useParams } from 'react-router-dom'
import { useSelector  , useDispatch} from 'react-redux'
import {fetchSingleDoctorPageData} from "../../../redux/action/doctorPageAction"
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



const SingleDoctor = () => {
    const doctorPage = useSelector((state)=> state.singleDoctorReducer)
    const doctor = doctorPage.data?.data
    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(()=> {
            dispatch(fetchSingleDoctorPageData(id))
    },[])



    return (
        <WrapBox>
            <ContainerBox>
                <Grid container>
                    <Grid item xs={6}  md={6}>
                        <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700'}}>Doctor Informations</Typography>
                        <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span> <Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/doctors'>Doctors</Typography> <span><ArrowRightIcon /></span> Details</Typography>
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
                            {doctorPage.isLoading === true && <Typography variant='h5' sx={{color:'#1a237e', margin: '10px auto',width:'100%',textAlign: 'center' }}><CircularProgress disableShrink /></Typography>}
                            {
                               doctorPage.isLoading === false && <Box sx={{ width: 400 , margin: "auto" }} py={3} textAlign='center'>
                               <Typography variant="h6">Name: {doctor.name}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Email: {doctor.email}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Account Status: {doctor.accountStatus}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Gender: {doctor.gender}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Status: {doctor.status}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Age: {doctor.age}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Address: {doctor.address}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Phone Number: {doctor.number}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Category: {doctor.category}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Certified: {doctor.certified}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Fee: {doctor.fee}</Typography>
                                   <Divider sx={{ marginTop: "6px", marginBottom: "6px" }}/>
                               <Typography variant="h6">Roll: {doctor.roll}</Typography>
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

export default SingleDoctor;