import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Login from "./components/login";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
