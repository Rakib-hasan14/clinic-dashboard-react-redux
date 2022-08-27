import React , {useEffect} from 'react';
import styled from '@emotion/styled';
import { Box, Grid , Typography} from '@mui/material';
import Divider from '@mui/material/Divider';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoneyIcon from '@mui/icons-material/Money';
import ApprovalIcon from '@mui/icons-material/Approval';
import { 
    ResponsiveContainer, 
    PieChart, 
    Pie, 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip,
    BarChart, 
    Bar, 
    } from 'recharts';

import { useSelector  , useDispatch} from 'react-redux'
import {fetchMainPageData} from "../../redux/action/mainPageAction"
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

const TopBox = styled(Box)({
    backgroundColor: '#fff',
    borderLeft: '6px solid #1a237e',
    borderRadius: '10px',
    padding: '10px 20px'
})

const FinancesBoc = styled(Box)({
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '10px 0'
})

const TansInfo = styled(Box)({  
    display:'grid',
    padding: '15px 0',
    gridTemplateColumns:'repeat(4,1fr)',
    textAlign: 'center',
    background: 'darkslategrey',
    color: '#fff',
    margin: '8px 0',
    borderRadius: '4px'
})

const TansParent = styled(Box)({  
    height: '248px',
    overflowY: 'scroll',
    scrollBehavior: 'smooth'
})

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const datas = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Dashboard = () => {

    const mainPage = useSelector((state)=> state.mainPageReducer)
    const dataOfMainPage = mainPage?.data?.data
    const dispatch = useDispatch()
    console.log(dataOfMainPage)

    useEffect(()=> {
        dispatch(fetchMainPageData())
    },[])

    return (
        <WrapBox>
                            
            { mainPage.isLoading === true && <Typography variant='h5' sx={{color:'#1a237e', display: 'flex',width:'100%',justifyContent: 'center',alignItems: 'center' }}><CircularProgress disableShrink /></Typography>}
            {mainPage.isLoading === false && <ContainerBox>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <TopBox>
                            <Typography sx={{ fontSize: '15px', marginBottom: '7px',display: 'flex',alignItems: 'center',fontWeight: '500'}} variant='h5'><span><AccountBalanceIcon sx={{marginRight: '7px'}}/></span> Balance</Typography>
                            <Typography variant='h6'>${dataOfMainPage?.balance}+</Typography>
                        </TopBox>
                    </Grid>
                    <Grid item md={3}>
                        <TopBox>
                            <Typography sx={{ fontSize: '15px', marginBottom: '7px',display: 'flex',alignItems: 'center',fontWeight: '500'}} variant='h5'><span><MoneyIcon sx={{marginRight: '7px'}}/></span> Income</Typography>
                            <Typography variant='h6'>${dataOfMainPage?.income}+</Typography>
                        </TopBox>
                    </Grid>
                    <Grid item md={3}>
                        <TopBox>
                            <Typography sx={{ fontSize: '15px', marginBottom: '7px',display: 'flex',alignItems: 'center',fontWeight: '500'}} variant='h5'><span><ApprovalIcon sx={{marginRight: '7px'}}/></span> Appointment</Typography>
                            <Typography variant='h6'>{dataOfMainPage?.appointment}+</Typography>
                        </TopBox>
                    </Grid>
                    <Grid item md={3}>
                        <TopBox>
                            <Typography sx={{ fontSize: '15px', marginBottom: '7px',display: 'flex',alignItems: 'center',fontWeight: '500'}} variant='h5'><span><AccessibilityIcon sx={{marginRight: '7px'}}/></span> Doctors</Typography>
                            <Typography variant='h6'>{dataOfMainPage?.doctors}+</Typography>
                        </TopBox>
                    </Grid>
                </Grid>

                <Grid mt={2} container spacing={2}>
                    <Grid item md={6}>
                        <FinancesBoc>
                            <ContainerBox>
                                <Typography mb={1} variant='h6' textAlign='center'>Finance</Typography>
                                <Box sx={{ width: '100%', height: 250 }}>
                                    <ResponsiveContainer>
                                    <AreaChart
                                    data={dataOfMainPage.transactions}
                                    margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                    }}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="fee" stroke="#8884d8" fill="#1a237e" />
                                    </AreaChart>
                                    </ResponsiveContainer>
                                </Box>
                            </ContainerBox>
                        </FinancesBoc>
                    </Grid>
                    <Grid item md={6}>
                        <FinancesBoc>
                            <ContainerBox>
                                <Typography mb={1} variant='h6' textAlign='center'>Tansactions</Typography>
                                <Divider />
                                <TansParent>
                                    {
                                        dataOfMainPage.finance?.map(transaction => <Box sx={{borderBottom: '2px  solid lightgrey'}}>
                                                <TansInfo>
                                                    <Typography variant='p' sx={{fontSize: '14px', fontWeight: 'bold'}}>{transaction.person?.name}</Typography>
                                                    <Typography variant='p' sx={{fontSize: '14px', fontWeight: 'bold'}}>{transaction.note}</Typography>
                                                    <Typography variant='p' sx={{fontSize: '14px', fontWeight: 'bold'}}>${transaction.amount}</Typography>
                                                    <Typography variant='p' sx={{fontSize: '14px', fontWeight: 'bold',color:'#27d534'}}>Success</Typography>
                                                </TansInfo>
                                            </Box>
                                        )
                                        
                                    }
                                    
                                </TansParent>
                            </ContainerBox>
                        </FinancesBoc>
                    </Grid>
                </Grid>

                <Grid mt={2} container spacing={2}>
                    <Grid item md={9}>
                        <FinancesBoc>
                                <Typography mb={1} variant='h6' textAlign='center'>Monthly Income</Typography>
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <Box px={2} sx={{ maxWidth: '90%', height: 250,  }}>
                                        <ResponsiveContainer>
                                        <BarChart width={150} height={40} data={datas}>
                                            <Bar dataKey="uv" fill="#1a237e" />
                                        </BarChart>
                                        </ResponsiveContainer>
                                    </Box>
                                </Grid>
                                <Grid item md={3} display='flex' alignItems='center' justifyContent='center'>
                                    <Box >
                                        <Box textAlign='center' >
                                            <Typography sx={{fontSize: 14 , color: 'gray'}} mb={1} variant='h6'>This Month</Typography>
                                            <Typography sx={{fontSize: 27}} mb={1} variant='h6'>$2300</Typography>
                                            
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item md={3} display='flex' alignItems='center' justifyContent='center'>
                                     <Box alignItems='center' display='flex'>
                                        <Box textAlign='center' >
                                            <Typography sx={{fontSize: 14 , color: 'gray'}} mb={1} variant='h6'>Last Month</Typography>
                                            <Typography sx={{fontSize: 27}} mb={1} variant='h6'>$1900</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </FinancesBoc>
                    </Grid>
                    <Grid item md={3}>
                        <FinancesBoc sx={{minHeight: '93%'}}>
                            <Typography sx={{fontSize: 18, color: '#215885'}} mb={1} variant='h6' textAlign='center'>Income Analysis</Typography>
                            <Box sx={{ width: '80%', height: 220, margin: 'auto' }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie  dataKey="value" data={data} fill="#1a237e" label />
                                </PieChart>
                            </ResponsiveContainer>
                            </Box>
                        </FinancesBoc>
                    </Grid>
                </Grid>
            </ContainerBox>}
        </WrapBox>
    );
};

export default Dashboard;