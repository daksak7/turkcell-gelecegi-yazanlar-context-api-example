import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Auth/Login';
import  Register  from './pages/Auth/Register';
import Dashboard from './layouts/Dashboard';
import AuthLayout from './layouts/Auth/';
import NotFound from './pages/NotFound';

function App() {

  

  return ( 
    <div className="App"> 

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>}>
    <Route index element={<Home/>}></Route>
      <Route path="users" element={<UserList/>}></Route>
      <Route path='users/:id' element={<UserDetail/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
    </Route>
      
      <Route path='auth' element={<AuthLayout/>}> 
        <Route  index element={<Login/>}></Route>
        <Route  path="register" element={<Register/>}></Route>
      </Route>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>

  
    </div> 
  );
}

export default App;
