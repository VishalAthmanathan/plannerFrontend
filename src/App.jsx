import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from "./components/home"
import EventComponent from './components/event';
import CreateGroupComponent from './components/createGroup';
import Login from './components/login'
import Signup from './components/signup'
import Profile from './components/profile/profileView'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/event' element={<EventComponent/>}/>
        <Route path='/creategroup' element={<CreateGroupComponent/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
