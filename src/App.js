import React from 'react';
import {useSelector} from "react-redux"
import './App.css';
import Header from "./Header"
import SideBar from './SideBar';
import Feed from './Feed';
import Login from './Login';
import { selectUser } from './features/userSlice';
function App() {
  const user =  useSelector(selectUser)
  return (
    <div className="app">
     {/* <h1>Lets build a Linkedin clone</h1> */}
     {/*Header*/}
     <Header/>
     {/* {!user?(
       <Login />
     ):( */}
      <div className="app__body">
      <SideBar/>
      <Feed />
      {/*Widget*/}

      </div>

 {/* )}  */}
    
    
      
    </div>
  );
}

export default App;
