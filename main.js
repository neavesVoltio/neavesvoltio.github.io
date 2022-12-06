import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './app/firebase.js'
import { loginCheck } from './app/loginCheck.js'

//import './app/signupForm.js'
import './app/logout.js'
//import './app/signinForm.js'
//import './app/googleLogin.js'
export let webDomain = "http://localhost:5500"
// localhost:5555
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
