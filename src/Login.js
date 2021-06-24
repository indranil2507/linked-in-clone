import React,{useState} from 'react'
import './Login.css'
import {auth} from "./firebase"
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [profilePic,setProfilePic] = useState("")
    const dispatch = useDispatch()

    const loginToApp=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,

            }));
        }).catch((error) => alert(error));
        
    }


    const register=()=>{
        if (!name) {
            return alert("Please enter a full name");
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL: profilePic
            })
            .then(()=>{
                dispatch(
                    login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoUrl: profilePic,
                })
            );

            });
        }).catch((error)=>alert(error));

    };
  
    return (
        <div className="login">
           <img src="data:image/png;base64,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" alt=" "/>
           <form>
               <input value={name} onChange={(e) => setName(e.target.value)}placeholder="Full name (required if registering)" type="text"/>
               <input  value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic(optional)" type="text"/>
               <input  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
               <input  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>

               <button type="submit" onClick={loginToApp}>Sign In</button> 
           </form>
           <p>Not a member?
               <span className="login__register" onClick={register}>Register</span>
           </p>
        </div>
    )
}

export default Login
