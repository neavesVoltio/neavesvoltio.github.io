import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'

export function logOut(){   
    const logoutButton = document.querySelector('.userLogged')
    logoutButton.addEventListener('click', async () => {
        await signOut(auth)
        console.log('logout')
        window.open('https://neavesvoltio.github.io/index.html', '_self');
    })

        
}
    



