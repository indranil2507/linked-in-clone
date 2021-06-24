import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import './App.css';
import {login, logout,selectUser} from "./features/userSlice"
import Header from "./Header"
import SideBar from './SideBar';
import Feed from './Feed';
import Login from './Login';
// import { selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user =  useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrL: userAuth.photoURL,

        }))

      }else{
        dispatch(logout())
      }
    });
  },[]);

  return (
    <div className="app">
     {/* <h1>Lets build a Linkedin clone</h1> */}
     {/*Header*/}
     <Header/>
     {!user?(
       <Login />
     ):(
      <div className="app__body">
      <SideBar/>
      <Feed />
      {/*Widget*/}

      </div>

  )} 
    
    
      
    </div>
  );
}

export default App;
