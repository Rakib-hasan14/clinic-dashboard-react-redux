import React from 'react';
import './AddPateint.css'
import styled from '@emotion/styled';
import { Box , Grid , Typography , Button} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import { useSelector  , useDispatch} from 'react-redux'
import {AddPateintAction} from "../../../redux/action/pateintPageAction"
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';




const WrapBox = styled(Box)({
    width: '78%',
    minHeight: '100vh',
    position: 'absolute',
    backgroundColor: '#dddcdc',
    marginTop: "64px",
    display: "flex",
    marginLeft: "22%"
})

const AddBox = styled(Box)({
    backgroundColor: "#fff",
    padding: "5px 0",
    marginTop: "20px",
    borderRadius: "10px",
})

const InfoBox = styled(Box)({
    marginTop: "20px",
    borderRadius: "10px",
})

const InputField = styled(TextField)({
    width: "100%",
})

const ContainerBox = styled(Box)({
    width: '95%',
    margin: '20px auto'
})




const AddPateint = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [age, setAge] = React.useState('');
    const [number, setNumber] = React.useState(0);
    const [address, setAddress] = React.useState('');
    const [account, setAccount] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [open, setOpen] = React.useState(false);


    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setEmail(event.target.value) ;
    };
    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };
    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    };
    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    };
    const handleChangeAccount = (event) => {
        setAccount(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };


    const addPateintResponse = useSelector((state)=> state.addPateintReducer)
    const dispatch = useDispatch()
    console.log(addPateintResponse)


const handleAddPateint = () => {

    let data = {
        name,
        email,
        age,
        number,
        address,
        accountStatus: account,
        gender,
        status
    }
console.log(data)
    dispatch(AddPateintAction(data))

    setName('')
    setEmail('')
    setAge('')
    setAddress('')
    setNumber('')
    setAccount('')
    setGender('')
    setStatus('')
    setOpen(true)
}

    return (
        
        <WrapBox>
            <ContainerBox>
            {addPateintResponse.status === false && <Collapse in={open}>
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
                {addPateintResponse.message}!
                </Alert>
            </Collapse> }
            {addPateintResponse.status === true && <Collapse in={open}>
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
                {addPateintResponse.message}!
                </Alert>
            </Collapse>}
                <Box sx={{}}>
                    <Typography sx={{marginBottom: "10px", color: "gray"}} variant="h6">Pateint Add</Typography>
                    <Typography  sx={{color: "#304f68",fontWeight: "500", display: "flex",alignItems: "flex-start",textDecoration: "none"}}><Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/'>Clinic</Typography> <span><ArrowRightIcon /></span> <Typography sx={{ textDecoration: "none", color: "#304f68"}} component={Link} to='/pateints'>Pateints</Typography> <span><ArrowRightIcon /></span> Add</Typography>
                </Box>
                <AddBox>
                    <ContainerBox>
                        <Typography sx={{marginBottom: "10px", color: "gray" ,fontSize: "18px" }} variant="h6">Pateint Information</Typography>
                        <Divider />
                        <InfoBox>  
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <InputField onChange={handleChangeName
                                    } id="outlined-basic" label="Name *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField onChange={handleChangeEmail
                                    } id="outlined-basic" label="Email *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField onChange={handleChangeAge
                                    }  id="outlined-basic" label="Age *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField onChange={handleChangeAddress
                                    }  id="outlined-basic" label="Address *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <InputField onChange={handleChangeNumber
                                    } id="outlined-basic" label="Phone Number *" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl sx={{ minWidth: "100%" }}>
                                            <InputLabel id="demo-simple-select-helper-label">Account Status *</InputLabel>
                                                    <Select
                                                    labelId="demo-simple-select-helper-label"
                                                    id="demo-simple-select-helper"
                                                    value={account}
                                                    label="Account Status "
                                                    onChange={handleChangeAccount}
                                                    >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value='active'>Active</MenuItem>
                                                    <MenuItem value='pending'>Pending</MenuItem>
                                                    </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <FormControl sx={{ minWidth: "100%" }}>
                                        <InputLabel id="demo-simple-select-helper-label">Gender *</InputLabel>
                                            <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            value={gender}
                                            label="Gender "
                                            onChange={handleChangeGender}
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value='male'>Male</MenuItem>
                                            <MenuItem value='female'>Female</MenuItem>
                                            <MenuItem value='other'>Other</MenuItem>
                                            </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl sx={{ minWidth: "100%" }}>
                                        <InputLabel id="demo-simple-select-helper-label">Status *</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-helper-label"
                                                id="demo-simple-select-helper"
                                                value={status}
                                                label="Status"
                                                onChange={handleChangeStatus}
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value='married'>Married</MenuItem>
                                                <MenuItem value='single'>Single</MenuItem>
                                                </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={12} sx={{textAlign: "center"}}>
                                <Button onClick={handleAddPateint} sx={{mt:2}} variant="contained">Add</Button>
                                </Grid>
                            </Grid> 
                        </InfoBox>
                    </ContainerBox>
                </AddBox>
            </ContainerBox>
        </WrapBox>
    );
};

export default AddPateint;