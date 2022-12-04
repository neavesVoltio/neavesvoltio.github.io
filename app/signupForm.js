import { createUserWithEmailAndPassword, getAuth, updateProfile } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessages } from './showMessages.js'
import { runCompleteUserData } from './completeUserData.js'
console.log('access signupForm')
const signupForm = document.querySelector('#signupButton')
const name = document.querySelector('#name')
const signupEmail = document.querySelector('#signup-email')
const phone = document.querySelector('#phone')
const cumple = document.querySelector('#cumple')
const password = document.querySelector('#password')
const signupPassword = document.querySelector('#signup-password')


console.log(signupForm);
signupForm.addEventListener('click', async () =>{
    console.log('click a signup');
    if(password.value != signupPassword.value){
        signupPassword.style.borderColor = '#Cb3234';
        showMessages('El password no coincide', 'err')
        return
    } else {
        console.log(signupEmail.value, signupPassword.value)
        try{
           const userCredentials = await createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value,{
           displayName: name.value})
           console.log(userCredentials)
           showMessages('Welcome ' + userCredentials.user.email)

            updateProfile(auth.currentUser, {
            displayName: name.value
            
            
            })
            // Agregar una funcion para guardar el numero de telefono y la fecha de cumpleaños en firebase
            runCompleteUserData(phone, cumple)
            window.open('http://localhost:5501/src/index.html', '_self');

            
           
        } catch (error){
            if(error.code === 'auth/email-already-in-use'){
                showMessages('El usuario ya existe', 'xxxx')
                
            } else if( error.code === 'auth/invalid-email'){
                showMessages('Ingrese un correo valido', 'xxxx')
            } else if( error.code === 'auth/weak-password') {
                showMessages('Ingrese un password mayor a 6 caracteres', 'xxxx')
            } else if(error.code){
                showMessages('Algo salio mal','xxxxx')
            }
        }
    }
    
    
})

