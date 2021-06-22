import React from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption'
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay"

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input type="text"/>
                        <button type="submit"> Send </button>

                        
                    </form>
                   
                </div>
                <div className="feed__inputOptions">
                        <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                        <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7a33e" />
                        <InputOption Icon={EventNoteIcon} title="Photo" color="#cocbcd" />
                        <InputOption Icon={CalenderViewDayIcon} title="Photo" color="#7FC15E" />
                    </div>
            </div>
           
        </div>
    )
}

export default Feed
