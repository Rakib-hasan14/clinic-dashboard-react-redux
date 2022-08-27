import React,{useEffect} from 'react';
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
import { useParams } from 'react-router-dom'
import { useSelector  , useDispatch} from 'react-redux'
import { fetchCategoryData, fetchDoctorData, AddAppointAction} from "../../../redux/action/appointmentPageAction"


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


const AddAppoint = () => {
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

    const {id} = useParams()

    const appoint = useSelector((state)=> state.addAppointReducer)
    const fetchDatas = useSelector((state)=> state.appointFetchReducer)
    const dispatch = useDispatch()

    console.log(appoint)
    // Fetch Data
    useEffect(()=> {
        dispatch(fetchCategoryData())
        dispatch(fetchDoctorData())

    },[])

    const handleAddAppoint = () => {

        const data = {
            category,
            doctor,
            pateint: id,
            date,
            status,
        }

        dispatch(AddAppointAction(data))

        setCategory('')
        setDoctor('')
        setStatus('')
        setDate('')
    }
    

    return (
        <WrapBox>
            <ContainerBox>
                <Typography sx={{marginBottom: "10px", color: "gray"}} variant="h6">Make Appointment</Typography>
                <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span> <Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/appointments'>Appointments</Typography><span><ArrowRightIcon /></span> <Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/apoint-pateint'>Apoint Pateint</Typography> <span><ArrowRightIcon /></span> Add Appoint</Typography>

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
                            <Button onClick={handleAddAppoint} variant="contained">Appoint</Button>
                        </Grid>
                    </Grid>
                    </ContainerBox>
                </ContentBox>

                
                <ContentBox textAlign='center' py-3>
                    {appoint.status === true ? <Typography variant='h3' color='green'>
                        {appoint.message}
                    </Typography> : <Typography variant='h3' color='red'>
                        {appoint.message}
                    </Typography>}
                    <Typography sx={{marginTop: '10px'}} component={Link} to='/appointments' variant="contained">Go Back Appointments</Typography>
                </ContentBox>
            </ContainerBox>
        </WrapBox>
    );
};

export default AddAppoint;