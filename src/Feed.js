import React,{useState,useEffect} from 'react'
import "./Feed.css"
import Post from './Post'
import CreateIcon from "@material-ui/icons/Create"
import InputOption from './InputOption'
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import EventNoteIcon from "@material-ui/icons/EventNote"
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay"
import {db} from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from "react-flip-move"
function Feed() {

    const user = useSelector(selectUser)
    const [input,setInput] = useState('')
    const [photoUrl,setPhotoUrl] = useState('')
    const [posts,setPosts] = useState([])
    const [likesCount, setLikesCount] = useState(0);
    const [photoInput,setPhotoInput] = useState(false)
    // const [commentsCount, setCommentsCount] = useState(0);
    // const [heartIcontOrder, setHeartIcontOrder] = useState(1);
    // const [smileIconOrder, setSmileIconOrder] = useState(1);
    // const [thumsUpIconOrder, setThumsUpIconOrder] = useState(1);

    useEffect(()=>{
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data:doc.data(),

                }
            )))
        })
    },[])
    console.log(likesCount)
    const sendPost = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            displayUrl:user.photoUrL,
            message: input,
            photoUrl: photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            // likes:likesCount,
            // likes:0
            

        });
        setInput("");
        setPhotoUrl("")
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    {
                        (photoInput)
                        ?
                        
                            <form style={{display:"flex",flexDirection:"column"}}>
                            <input value={input} className="text__input" placeholder="Write about your image here" onChange={e=>setInput(e.target.value)} type="text"/>
                            <input value={photoUrl} placeholder="Add photo Url here" className="photo__input" onChange={e=>setPhotoUrl(e.target.value)} type="text"/>
                            <button onClick={sendPost} type="submit"> Send </button>
    
                            
                            </form>

                        :
                             <form style={{display:"flex",flexDirection:"column"}}>
                            <input value={input} placeholder="text" onChange={e=>setInput(e.target.value)} type="text"/>
                            {/* <input value={photoUrl} placeholder="photo" onChange={e=>setPhotoUrl(e.target.value)} type="text"/> */}
                            <button onClick={sendPost} type="submit"> Send </button>
    
                            
                            </form>

                    }
                   
                   
                </div>
                <div className="feed__inputOptions">
                    <button onClick={()=>{setPhotoInput(!photoInput)}}>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    </button>
                      
                        <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7a33e" />
                        <InputOption Icon={EventNoteIcon} title="Photo" color="#cocbcd" />
                        <InputOption Icon={CalenderViewDayIcon} title="Photo" color="#7FC15E" />
                        {/* <button onClick={()=>{
                setLikesCount((prevState)=>(prevState) + 1)
                //  console.log(counter);
                //  setLikesCount(counter)

                 }} >Click me</button> */}
                    </div>
            </div>
            <FlipMove>
            {posts.map(({id,data:{name,description,message,photoUrl,displayUrl,likes}})=>(
                <Post 
                key={id}
                name={name}
                description={description}
                displayUrl={displayUrl}
                message={message}
                photoUrl={photoUrl}
                likes={likes}
                setLikesCount={setLikesCount}
            
                // // likesCount={likesCount}
                />
    ))}
            </FlipMove>
          
           {/* <Post name= 'Sonny' description="this is a test" message="Wow this works"/> */}
        </div>
    )
}

export default Feed
