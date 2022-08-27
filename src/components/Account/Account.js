import React , {useEffect}from 'react';
import styled from '@emotion/styled';
import { Box , Grid , Typography , Button} from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useSelector  , useDispatch} from 'react-redux'
import { fetchAccountPageData,fetchAllData , AddPaymentAction} from "../../redux/action/accountPageAction"
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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
  
const InputField = styled(TextField)({
    width: "100%",
})
  
const ContentBox = styled(Box)({
    backgroundColor: "#fff",
    padding: "5px 0",
    marginTop: "20px",
    borderRadius: "10px",
})

const Account = () => {
    
    const [moneyFor, setMoneyFor] = React.useState('');
    const [person, setPerson] = React.useState('');
    const [userfor, setFor] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [open, setOpen] = React.useState(false);

    
    const handleChangeMoneyFor = (event) => {
        setMoneyFor(event.target.value);
        console.log(moneyFor)
    };
    const handleChangeParson = (event) => {
        setPerson(event.target.value);
    };
    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
    };
    const handleChangeFor = (event) => {
        setFor(event.target.value);
    };


    const accountPage = useSelector((state)=> state.accountReducer)
    const dataOfAccountPagePage = accountPage.data
    const accountAllPage = useSelector((state)=> state.accountAllReducer)
    // const dataOfAccountPagePage = accountPage.data
    const dispatch = useDispatch()
console.log(accountAllPage)
    // Fetch Data
    useEffect(()=> {
        dispatch(fetchAccountPageData())
        dispatch(fetchAllData())
    },[])


    const addPaymentResponse = useSelector((state)=> state.addPaymentReducer)
    console.log(addPaymentResponse)

    const handleAddPayment = () => {

        let data = {
            note: moneyFor,
            type: person,
            person: userfor,
            amount,
        }

        dispatch(AddPaymentAction(data))
    
        setMoneyFor('')
        setPerson('')
        setFor('')
        setAmount('')
        setOpen(true)

        
        dispatch(fetchAccountPageData())
    }

    return (
        <WrapBox>
            <ContainerBox>
                <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700'}}>Account</Typography>
                <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span>  Account</Typography>
                <ContentBox>
                
                    <ContainerBox>
                    {addPaymentResponse.status === false && <Collapse in={open}>
                            <Alert
                            variant="outlined" 
                            severity="error"
                            action={
                                <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                                >
                                <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                            >
                            {addPaymentResponse.message}!
                            </Alert>
                        </Collapse> }
                        {addPaymentResponse.status === true && <Collapse in={open}>
                            <Alert
                            variant="outlined" 
                            severity="success"
                            action={
                                <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                                >
                                <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                            >
                            {addPaymentResponse.message}!
                            </Alert>
                        </Collapse>}  
                        <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <FormControl sx={{ minWidth: "100%" }}>
                                        <InputLabel  id="demo-simple-select-helper-label">Money for</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={moneyFor}
                                            label="Money for"
                                            onChange={handleChangeMoneyFor}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'revenue'}>Revenue</MenuItem>
                                            <MenuItem value={'tax'}>Tax</MenuItem>
                                            <MenuItem value={'bill'}>Bill</MenuItem>
                                            <MenuItem value={'salary'}>Salary</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {moneyFor.length > 1 && <Grid item xs={12} md={4}>
                                    <FormControl sx={{ minWidth: "100%" }}>
                                        <InputLabel  id="demo-simple-select-helper-label">Person</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={person}
                                            label="Person"
                                            onChange={handleChangeParson}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'admin'}>Admin</MenuItem>
                                            <MenuItem value={'doctor'}>Doctor</MenuItem>
                                            <MenuItem value={'staff'}>Staff</MenuItem>
                                            <MenuItem value={'other'}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>}
                                {person.length > 1 && <Grid item xs={12} md={4}>
                                    <FormControl sx={{ minWidth: "100%" }}>
                                        <InputLabel  id="demo-simple-select-helper-label">For</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={userfor}
                                            label="For"
                                            onChange={handleChangeFor}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                accountAllPage.doctor.length > 0 && person == 'doctor' &&accountAllPage.doctor.map(item => <MenuItem value={item._id}>{item.name}</MenuItem> )
                                            }
                                            {
                                                accountAllPage.staff.length > 0 && person == 'staff' &&accountAllPage.staff.map(item => <MenuItem value={item._id}>{item.name}</MenuItem> )
                                            }
                                            {
                                                person != 'staff' &&  person != 'doctor' && <MenuItem value={''}>Not Available right now</MenuItem>
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>}
                                {  userfor != '' &&  person != '' &&  moneyFor != '' &&<Grid item xs={6} md={6}>
                                    <InputField onChange={handleChangeAmount} sx={{marginTop: "8px"}} size="small" id="outlined-basic" label="Amount" variant="outlined" />
                                </Grid>}
                                {userfor != '' && person != '' && moneyFor != '' &&<Grid item xs={6} md={6} sx={{width: "100%"}} textAlign='center'>
                                    <Button onClick={handleAddPayment} sx={{marginTop: "8px"}} variant="contained">Send Money</Button>
                                </Grid>}
                        </Grid>
                    </ContainerBox>
                </ContentBox>
                <ContentBox>
                    <Typography sx={{marginBottom: "10px", marginTop: "10px", color: "gray" ,fontSize: "18px", textAlign: "center" }} variant="h4">Tansactions</Typography>
                    <Divider sx={{marginBottom: "15px"}}/>
                    <ContainerBox>   
                        <table>
                        <tr>
                            <th>Name</th>
                            <th>For</th>
                            <th>amount</th>
                            <th>Payment</th>
                            <th>Number</th>
                        </tr>
                        {accountPage.isLoading === false && dataOfAccountPagePage.length > 0 && dataOfAccountPagePage.map (data=> <tr>
                            <td>{data.person?.name}</td>
                            <td>{data.type}</td>
                            <td>{data.amount}</td>
                            <td>{data.note}</td>
                            <td>{data.person?.number}</td>
                        </tr> )}
                        </table>
                        {accountPage.isLoading === true && <Typography variant='h5' sx={{color:'#1a237e', margin: '10px auto',width:'100%',textAlign: 'center' }}><CircularProgress disableShrink /></Typography>}
                        {dataOfAccountPagePage.length == 0 && accountPage.isLoading === false && <Typography variant='h5' sx={{color:'#1a237e', fontWeight: '700' , textAlign: 'center', margin: '10px 0'}}>No Doctor found</Typography>
                        }
                    </ContainerBox>
                </ContentBox>
            </ContainerBox>
        </WrapBox>
    );
};

export default Account;