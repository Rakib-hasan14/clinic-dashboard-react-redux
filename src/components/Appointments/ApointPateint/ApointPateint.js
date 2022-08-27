import React,{useEffect} from 'react';
import styled from '@emotion/styled';
import { Box , Grid , Typography , Button} from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector  , useDispatch} from 'react-redux'
import { fetchPateintData } from "../../../redux/action/appointmentPageAction"
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

const InputField = styled(TextField)({
    width: "100%",
})


const ApointPateint = () => {

    const [search, setSearch] = React.useState('');

    const handleChangeSearch = (event) => {
      setSearch(event.target.value);
    };

    const pateintData = useSelector((state)=> state.appointPateintReducer)

    const dataOfPateint = pateintData.pateint
    const dispatch = useDispatch()

console.log(pateintData)


    useEffect(()=> {
      dispatch(fetchPateintData(search)) 

    },[search])

    return (
        <WrapBox>
            <ContainerBox>
                <Typography sx={{marginBottom: "10px", color: "gray"}} variant="h6">Apoint Pateint</Typography>
                    <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span> <Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/appointments'>Appointments</Typography> <span><ArrowRightIcon /></span> Apoint Pateint</Typography> 
                    <ContentBox>
                    <ContainerBox>
                        <Grid spacing={3} container>
                            <Grid item xs={6} md={9}>
                                <InputField onClick={handleChangeSearch} sx={{marginTop: "8px"}} size="small" id="outlined-basic" label="Search" variant="outlined" />
                            </Grid>
                            <Grid item xs={6} md={3} sx={{width: "100%"}} textAlign='center'>
                                <Button sx={{marginTop: "8px"}} variant="contained">Search</Button>
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
                          {pateintData.isLoading === false && dataOfPateint.length > 0 && dataOfPateint.map (data=> <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.number}</td>
                            <td>{data.age}</td>
                            <td><Button component={Link} to={`/add-appoint/${data._id}`} variant="contained">Add Appoint</Button></td>
                          </tr> ) 
                          }
                        </table>
                        {pateintData.isLoading === true && <Typography variant='h5' sx={{color:'#1a237e', margin: '10px auto',width:'100%',textAlign: 'center' }}><CircularProgress disableShrink /></Typography>}
                        {dataOfPateint.length == 0 && pateintData.isLoading === false && <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700' , textAlign: 'center', margin: '10px 0'}}>No pateint found</Typography>
                        }
                    </ContainerBox>
                    </ContentBox>
            </ContainerBox>
        </WrapBox>
    );
};

export default ApointPateint;