import { Avatar } from '@material-ui/core'
import React ,{useState} from 'react'

import "./Post.css"
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import {db} from './firebase'
import firebase from 'firebase'
function Post({id,name,description,message,photoUrl,likes,setLikesCount}) {
    
    
    const [counter, setCounter] = useState(Math.floor(Math.random() * 1000) + 1);
    const [liked, setLiked] = useState(false)
    // // console.log(counter)
    // // const setLikes =()=>{
    // //     setCounter((prevState)=>prevState+1);
    // //     setLikesCount(counter)
    // //     console.log(counter)
    // // }
    // const sendLike = () =>{
    //     console.log("in funvtion")
    //     console.log(`"`+name+`"`)
        
        

    //     var post = db.collection('posts').doc(`"`+name+`"`);

    //     // Atomically increment the population of the city by 50.
    //     post.update({
    //         likes: firebase.firestore.FieldValue.increment(1)
    //     });
    // }
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
        <div className="post">
            <div className="post__header">
                <Avatar />
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

export default Post

//
