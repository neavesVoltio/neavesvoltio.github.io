const noUserLogged = document.querySelectorAll('.noUserLogged')
const userLogged = document.querySelectorAll('.userLogged')
const usuarioEnTitulo = document.querySelector('#usuarioEnTitulo')
import { logOut } from './logout.js'

let username

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js'


onAuthStateChanged(auth, (user) => {
    if (user) {
        username = user.displayName
    } else {
        
        console.log('user is not logged')
    }
    });


export const loginCheck = user => {
    if (user) {
        const noUserLogged = document.querySelectorAll('.noUserLogged')
        
        noUserLogged.forEach( link => link.style.display = 'none')
        console.log("user en login check")
        const loginButtonsContainer = document.getElementById('loginButtonsContainer') 

        let liUserEnTitulo = document.createElement("li")
        let liIngresaAquiButton = document.createElement("li")
        let liLogoutButton = document.createElement("li")
        
        let aUsuarioEnTitulo = document.createElement("a")
        let aIngresaAquiButton = document.createElement("a")
        let aLogoutButton = document.createElement("a")
    
        aUsuarioEnTitulo.className = 'p-2'
        aUsuarioEnTitulo.id = 'usuarioEnTitulo'
        aUsuarioEnTitulo.textContent = user.displayName
        
        aIngresaAquiButton.href = 'acceso.html'
        aIngresaAquiButton.className = 'button noUserLogged'
        aIngresaAquiButton.id = 'ingresaAquiButton'
        aIngresaAquiButton.innerHTML = 'Ingresa Aquí'
        
        aLogoutButton.href = '#'
        aLogoutButton.className = 'button userLogged'
        aLogoutButton.id = 'logoutButton'
        aLogoutButton.innerHTML = 'Logout'
    
        loginButtonsContainer.append(liUserEnTitulo)
        loginButtonsContainer.append(liIngresaAquiButton)
        loginButtonsContainer.append(liLogoutButton)
        liUserEnTitulo.appendChild(aUsuarioEnTitulo)
       // liIngresaAquiButton.appendChild(aIngresaAquiButton)
        liLogoutButton.appendChild(aLogoutButton)
        
        

        logOut()
       

    } else {
        console.log("user no en login check")
        const noUserLogged = document.querySelectorAll('.noUserLogged')
        
        noUserLogged.forEach( link => link.style.display = 'block')

        const loginButtonsContainer = document.getElementById('loginButtonsContainer') 

        let liUserEnTitulo = document.createElement("li")
        let liIngresaAquiButton = document.createElement("li")
        let liLogoutButton = document.createElement("li")
        
        let aUsuarioEnTitulo = document.createElement("a")
        let aIngresaAquiButton = document.createElement("a")
        let aLogoutButton = document.createElement("a")
    
        aUsuarioEnTitulo.className = 'p-2'
        aUsuarioEnTitulo.id = 'usuarioEnTitulo'
        
        aIngresaAquiButton.href = 'acceso.html'
        aIngresaAquiButton.className = 'button noUserLogged'
        aIngresaAquiButton.id = 'ingresaAquiButton'
        aIngresaAquiButton.innerHTML = 'Ingresa Aquí'
        
        aLogoutButton.href = '#'
        aLogoutButton.className = 'button userLogged'
        aLogoutButton.id = 'logoutButton'
        aLogoutButton.innerHTML = 'Logout'
    
        loginButtonsContainer.append(liUserEnTitulo)
        loginButtonsContainer.append(liIngresaAquiButton)
        loginButtonsContainer.append(liLogoutButton)
        //liUserEnTitulo.appendChild(aUsuarioEnTitulo)
        liIngresaAquiButton.appendChild(aIngresaAquiButton)
        //liLogoutButton.appendChild(aLogoutButton)
        

        //logOut()
       

    }
}

