import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import { Box , Grid , Typography , Button} from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector  , useDispatch} from 'react-redux'
import { fetchAppointPageData, fetchCategoryData, fetchDoctorData , makeDone} from "../../redux/action/appointmentPageAction"
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

const ContentBox = styled(Box)({
    backgroundColor: "#fff",
    padding: "5px 0",
    marginTop: "20px",
    borderRadius: "10px",
})

const Appointments = () => {
    
    const [category, setCategory] = React.useState('');
    const [doctor, setDoctor] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [date, setDate] = React.useState('');

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleChangeDoctor = (event) => {
        setDoctor(event.target.value);
    };
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };


    const appointPage = useSelector((state)=> state.appointReducer)
    const fetchDatas = useSelector((state)=> state.appointFetchReducer)
    const makeAppointDone = useSelector((state)=> state.appointMakeDone)

    const dataOfAppointPage = appointPage.data
    const dispatch = useDispatch()

console.log(appointPage)
    // Fetch Data
    useEffect(()=> {
        dispatch(fetchAppointPageData(category,status,doctor,date))
        dispatch(fetchCategoryData())
        dispatch(fetchDoctorData())

    },[category,status,doctor,date])

    const handleMakeDone = id => {
        dispatch(makeDone(id))
        
        dispatch(fetchAppointPageData(category,status,doctor,date))
    }

    return (
        <WrapBox>
            <ContainerBox>
                <Grid container>
                    <Grid item xs={6}  md={6}>
                        <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700'}}>Apointments</Typography>
                        <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span>  Appointments</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} textAlign='right'>
                        <Button component={Link} to='/apoint-pateint' variant="contained">Apoint Pateint</Button>
                    </Grid>
                </Grid>

                <ContentBox>
                    <ContainerBox>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <FormControl sx={{ minWidth: "100%" }}>
                                <InputLabel  id="demo-simple-select-helper-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={category}
                                        label="Category"
                                        onChange={handleChangeCategory}
                                        >
                                        <MenuItem value="">
                                        {fetchDatas.category.length > 0 ? <em>None</em> : <em>Not available</em>}
                                        </MenuItem>
                                            { fetchDatas.status === true && fetchDatas.category.length > 0 &&fetchDatas.category.map(singleCategory => <MenuItem value={singleCategory}>{singleCategory}</MenuItem> )}
                                        </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>
                            <FormControl sx={{ minWidth: "100%" }}>
                                <InputLabel  id="demo-simple-select-helper-label">Doctor</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={doctor}
                                        label="Doctor"
                                        onChange={handleChangeDoctor}
                                        >
                                        <MenuItem value="">
                                            {fetchDatas.doctor.length > 0 ? <em>None</em> : <em>Not available</em>}
                                        </MenuItem>
                                        { fetchDatas.status === true  && fetchDatas.doctor.length > 0 &&fetchDatas.doctor.map(singleDoctor => <MenuItem value={singleDoctor._id}>{singleDoctor.name}</MenuItem> )}
                                        </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={4}>
                            <LocalizationProvider width='100%' dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Data"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />           
                            </LocalizationProvider>
                        </Grid>
                        <Grid item md={6}>
                            <FormControl sx={{ minWidth: "100%" }}>
                                <InputLabel  id="demo-simple-select-helper-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={status}
                                        label="Staff Position"
                                        onChange={handleChangeStatus}
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'paid'}>Paid</MenuItem>
                                        <MenuItem value={'unpaid'}>Unpaid</MenuItem>
                                        </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={2} justifyContent='center' display='flex' alignItems='center'>
                            <Button variant="contained">Search</Button>
                        </Grid>
                    </Grid>
                    </ContainerBox>
                </ContentBox>

                <ContentBox>
                    <Typography sx={{marginBottom: "10px", marginTop: "10px", color: "gray" ,fontSize: "18px", textAlign: "center" }} variant="h4">Apointments</Typography>
                    <Divider sx={{marginBottom: "15px"}}/>
                    <ContainerBox>   
                        <table>
                          <tr>
                            <th>Pateint</th>
                            <th>Doctor</th>
                            <th>Status</th>
                            <th>Number</th>
                            <th>Action</th>
                          </tr>
                          {dataOfAppointPage.length > 0 && appointPage.isLoading === false && dataOfAppointPage.map(appoint => <tr>
                            <td>{appoint.pateint?.name}</td>
                            <td>{appoint.doctor?.name}</td>
                            <td>{appoint.status}</td>
                            <td>{appoint.pateint?.number}</td>
                            <td>{appoint.isDone === false ? <Button onClick={()=>handleMakeDone(appoint._id)} sx={{color: "#ef921e"}}>Done</Button> : <Button sx={{color: "#2de92d"}}>Success</Button>}</td>
                          </tr> )}
                          
                        </table>
                        {appointPage.isLoading === true && <Typography variant='h5' sx={{color:'#1a237e', margin: '10px auto',width:'100%',textAlign: 'center' }}><CircularProgress disableShrink /></Typography>}
                        {dataOfAppointPage.length == 0 && appointPage.isLoading === false && <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700' , textAlign: 'center', margin: '10px 0'}}>No appointment found</Typography>
                        }
                    </ContainerBox>
                </ContentBox>
            </ContainerBox>
        </WrapBox>
    );
};

export default Appointments;