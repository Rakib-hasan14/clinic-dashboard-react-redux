import './App.css';
import HeaderNav from './components/HeaderNav/HeaderNav';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Pateints from './components/Pateints/Pateints'
import AddPateint from './components/Pateints/AddPateint/AddPateint.js'
import Doctors from './components/Doctors/Doctors'
import Appointments from './components/Appointments/Appointments'
import Staffs from './components/Staffs/Staffs'
import Account from './components/Account/Account'
import AddDoctor from './components/Doctors/AddDoctor/AddDoctor';
import AddStaff from './components/Staffs/AddStaff/AddStaff';
import Login from './components/Login/Login';
import SingleStaff from './components/Staffs/SingleStaff/SingleStaff';
import SingleDoctor from './components/Doctors/SingleDoctor/SingleDoctor';
import SinglePateint from './components/Pateints/SinglePateint/SinglePateint';
import ApointPateint from './components/Appointments/ApointPateint/ApointPateint';
import AddAppoint from './components/Appointments/AddAppoint/AddAppoint';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav></HeaderNav>
      <SideBar></SideBar>
        <Routes>
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/pateints' element={<Pateints />}/>
          <Route exact path='/add-pateint' element={<AddPateint />}/>
          <Route exact path='/single-pateint/:id' element={<SinglePateint />}/>
          <Route exact path='/doctors' element={<Doctors />}/>
          <Route exact path='/add-doctor' element={<AddDoctor />}/>
          <Route exact path='/single-doctor/:id' element={<SingleDoctor />}/>
          <Route exact path='/appointments' element={<Appointments />}/>
          <Route exact path='/apoint-pateint' element={<ApointPateint />}/>
          <Route exact path='/add-appoint/:id' element={<AddAppoint />}/>
          <Route exact path='/staffs' element={<Staffs />}/>
          <Route exact path='/add-staff' element={<AddStaff />}/>
          <Route exact path='/single-staff/:id' element={<SingleStaff />}/>
          <Route exact path='/account' element={<Account />}/>
          <Route exact path='/' element={<Dashboard />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
