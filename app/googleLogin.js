import { GoogleAuthProvider, signInWithPopup  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'

import { showMessages } from './showMessages.js'

const googleButton = document.querySelector('#googleButton')

googleButton.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider()
    try{
      const credentials = await signInWithPopup(auth, provider)
      console.log(credentials)
      window.open('http://localhost:5501/src/index.html', '_self');
      
      showMessages('Welcome ' + credentials.user.displayName, 'success')
    } catch (error){
        console.log(error)
    }
    
})