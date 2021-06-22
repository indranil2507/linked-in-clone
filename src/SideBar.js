import { Avatar } from '@material-ui/core'
import React from 'react'
import './SideBar.css'

function SideBar() {

    const recentItem =(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p> 
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                 {/* <h1> I am a sidebar </h1> */}
            <img src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="background "/>
            <Avatar className="sidebar__avatar"/>
            <h2>Indranil Saha Roy</h2>
            <h4>iindranilsaha1@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you?</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on a post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software engineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
           
        </div>
    )
}

export default SideBar
