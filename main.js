import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './app/firebase.js'
import { loginCheck } from './app/loginCheck.js'

import './app/logout.js'
//import "https://www.google.com/recaptcha/api.js?render=6Le4-Y0jAAAAAIFKQGEkMpXiLXtKPg_GOvZcgB3F"
export let webDomain = "https://neavesvoltio.github.io"
// http://localhost:5500
// https://neavesvoltio.github.io

onAuthStateChanged(auth, async (user) => {
    try{
    
    if(user){
        loginCheck(user)
    } else {
        loginCheck(user)
    }
    }catch(error){
        console.log(error)
    }
    
})
