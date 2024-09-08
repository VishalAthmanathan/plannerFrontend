import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from "./components/home"
// import EventComponent from './components/event';
import CreateGroupComponent from './components/createGroup';
import Login from './components/login'
import Signup from './components/signup'
import Profile from './components/profile/profileView'
import EventList from './components/eventlist';
import eventData from './components/data';
import EventDetails from './components/event';
// import Meeting from './components/meeting';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

// let payload = {
//   meetingNumber:'5389102272',
//   role:0,
//   sdkKey:'E_7oJGXXRLaTR0kFiT_Dg',
//   sdkSecret:'FecuCmZQiekpysnFHRTqzDFmZFm7VP3b',
//   passWord:'EszH8b',
//   userName:'Testing',
//   userEmail:'',
//   leaveUrl:'https://localhost:3000'
// };

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/event' element={<EventComponent/>}/> */}
        <Route path='/creategroup' element={<CreateGroupComponent/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        {/* <Route path='/meeting' element={<Meeting payload={payload}/>}/> */}
        <Route path='/eventlist' element={<EventList events={eventData} />}/>
        <Route path="/event/:eventId" element={<EventDetails events={eventData} />} />

      </Routes>
    </>
  )
}

export default App
