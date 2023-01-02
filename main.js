import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './app/firebase.js'
import { loginCheck } from './app/loginCheck.js'


import './app/logout.js'
<<<<<<< Updated upstream
export let webDomain = "https://neavesvoltio.github.io"
=======
//import './app/signinForm.js'
//import './app/googleLogin.js'
export let webDomain = "http://localhost:5500"
>>>>>>> Stashed changes
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

