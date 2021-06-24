import React from 'react'
import "./HeaderOption.css"
import {Avatar} from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function HeaderOption({onClick,avatar,Icon,title}) {
   const user = useSelector(selectUser)

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && 
                <Avatar className="headerOption__icon" src={user?.photoUrL}>
                    {user?.email[0]}
                    </Avatar>
            
            }
            <h5 className="headerOption_title">{title}</h5>
        </div>
    )
}

export default HeaderOption
 