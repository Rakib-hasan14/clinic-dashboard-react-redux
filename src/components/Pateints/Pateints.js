import React,{useEffect} from 'react';
import './Pateints.css';
import styled from '@emotion/styled';
import { Box , Grid , Typography , Button} from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector  , useDispatch} from 'react-redux'
import {fetchPateintPageData,deletePateintAction} from "../../redux/action/pateintPageAction"
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

const ActionButton = styled(Box)({
  padding: "5px",
  borderRadius: "10px",
  color: "#fff",
  display: 'inline-block',
  cursor:'pointer'
})

const InputField = styled(TextField)({
  width: "100%",
})

const ContentBox = styled(Box)({
  backgroundColor: "#fff",
  padding: "5px 0",
  marginTop: "20px",
  borderRadius: "10px",
})


const Pateints = () => {

    const [sort, setSort] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [fromDate, setFromDate] = React.useState('');
    const [toDate, setToDate] = React.useState('');
    const [search, setSearch] = React.useState('');

    const handleChangePosition = (event) => {
        setPosition(event.target.value);
    };
    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
    };

    const pateintPage = useSelector((state)=> state.pateintReducer)
    const dataOfPateintPage = pateintPage.data
    const dispatch = useDispatch()
    console.log(dataOfPateintPage)

    useEffect(()=> {
        dispatch(fetchPateintPageData(position,sort,fromDate,toDate,search))
    },[position,sort,fromDate,toDate,search])

    //For Delete--
    const handlaDelete = id => {

        let data = {
            id
        }
        dispatch(deletePateintAction(data))
        console.log('fin')
    }
  
    return (
        <WrapBox>

           <ContainerBox>
                <Grid container>
                    <Grid item xs={6}  md={6}>
                        <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700'}}>Pateints</Typography>
                        <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span>  Pateints</Typography>
                    </Grid>
                    <Grid item xs={6} md={6} textAlign='right'>
                        <Button component={Link} to='/add-pateint' variant="contained">Add Pateint</Button>
                    </Grid>
                </Grid>
                <ContentBox>
                    <ContainerBox>
                        <Grid spacing={3} container>
                            <Grid item xs={12} md={6}>
                                <FormControl sx={{ minWidth: "100%" }}>
                                    <InputLabel  id="demo-simple-select-helper-label">Account status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={position}
                                            label="Account status"
                                            onChange={handleChangePosition}
                                            >
                                            <MenuItem value="">
                                               <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'active'}>Active</MenuItem>
                                            <MenuItem value={'pending'}>Pending</MenuItem>
                                            <MenuItem value={'cancal'}>Cancal</MenuItem>
                                        </Select>
                                    </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <FormControl sx={{ minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
                                    <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={sort}
                                            label="Sort By "
                                            onChange={handleChangeSort}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'Desc'}>Desc</MenuItem>
                                            <MenuItem value={'Asc'}>Asc</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid spacing={3} container>
                                    <Grid item xs={6} md={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label="From Data"
                                                value={fromDate}
                                                onChange={(newValue) => {
                                                    setFromDate(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                    label="To Date"
                                                    value={toDate}
                                                    onChange={(newValue) => {
                                                        setToDate(newValue);
                                                    }}
                                                    renderInput={(params) => <TextField {...params} />}
                                                />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid spacing={3} container>
                                    <Grid item xs={6} md={9}>
                                        <InputField onChange={handleChangeSearch} sx={{marginTop: "8px"}} size="small" id="outlined-basic" label="Search" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={6} md={3} sx={{width: "100%"}}>
                                        <Button sx={{marginTop: "8px"}} variant="contained">Search</Button>
                                    </Grid>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </ContainerBox>
                </ContentBox>
                <ContentBox>
                    <Typography sx={{marginBottom: "10px", marginTop: "10px", color: "gray" ,fontSize: "18px", textAlign: "center" }} variant="h4">Pateints</Typography>
                    <Divider sx={{marginBottom: "15px"}}/>
                        <ContainerBox>
                        <table>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Age</th>
                            <th>Action</th>
                          </tr>
                          { pateintPage.isLoading === false && dataOfPateintPage.length > 0 && dataOfPateintPage.map(data=> <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.number}</td>
                            <td>{data.age}</td>
                            <td><ActionButton component={Link} to={`/single-pateint/${data._id}`}><VisibilityIcon /></ActionButton ><ActionButton  onClick={()=>handlaDelete(data._id)}><DeleteIcon/></ActionButton> </td>
                          </tr>) }
                          
                        </table>
                        {pateintPage.isLoading === true && <Typography variant='h5' sx={{color:'#1a237e', margin: '10px auto',width:'100%',textAlign: 'center' }}><CircularProgress disableShrink /></Typography>}
                        {dataOfPateintPage.length == 0 && pateintPage.isLoading === false && <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700' , textAlign: 'center', margin: '10px 0'}}>No Pateint found</Typography>
                        }
                        </ContainerBox>
                    
                </ContentBox>
            </ContainerBox>
        
        </WrapBox>
    );
};

export default Pateints;