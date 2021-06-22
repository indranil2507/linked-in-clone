import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./Header"
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
     {/* <h1>Lets build a Linkedin clone</h1> */}
     {/*Header*/}
     <Header/>
     <div className="app__body">
        <SideBar/>
        {/*Feeds*/}
        {/*Widget*/}

     </div>
    
      
    </div>
  );
}

export default App;
