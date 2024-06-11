import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from "./components/home"
import EventComponent from './components/event';
import CreateGroupComponent from './components/createGroup';
// import CardComponent from './components/cards';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/event' element={<EventComponent/>}/>
        <Route path='/creategroup' element={<CreateGroupComponent/>}/>
      </Routes>
    </>
  )
}

export default App
