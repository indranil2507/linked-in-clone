import { Avatar } from '@material-ui/core'
import React ,{forwardRef,useState} from 'react'

import "./Post.css"
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'


const Post=forwardRef(({id,name,description,displayUrl,message,photoUrl,likes,setLikesCount},ref)=> {
    
    
    const [counter, setCounter] = useState(Math.floor(Math.random() * 1000) + 1);
    const [liked, setLiked] = useState(false)
  
    const checklike=()=>{
        if(liked){
            setCounter(counter-1)
            setLiked(!liked)
        }
        else{
            setCounter(counter+1)
            setLiked(!liked)

        }
    }
        
    
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={displayUrl} >{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
                {
                    // console.log({photoUrl})
                (photoUrl !== "")? <img className="post__image" src={photoUrl} alt="image"/> : " "
             
                }
               
                <p className="post__statistics">{counter} Likes .{(Math.floor(Math.random() * (3 - 1 + 1)) + 1)} Comments</p>
                
            </div>
            <div className="post__buttons">
                
                 <button className="likeButton" onClick={ checklike}>
                     <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color={(liked)? "orange":"gray" } />
                </button>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
            
        </div>
    )
}
)

export default Post

//
