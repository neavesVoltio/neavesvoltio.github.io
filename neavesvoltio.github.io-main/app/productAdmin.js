import { auth } from './firebase.js'
import { showMessages } from './showMessages.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore, collection, addDoc, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { app } from './firebase.js'
import { productos } from './productAdminGetList.js'

const db = getFirestore(app) 

let nombreArticulo = document.getElementById('nombreArticulo')
let precioArticulo = document.getElementById('precioArticulo') 
let inventarioActual = document.getElementById('inventarioActual')
let descripcionArticulo = document.getElementById('descripcionArticulo')
let imagenArticulo = document.getElementById('imagenArticulo')

let addProductButton = document.getElementById('addProductButton')

addProductButton.addEventListener('click', async (e) => {
    e.preventDefault()
    onAuthStateChanged(auth, async (user) => {
        if(user) {
            let nombreCliente = user.displayName
            let userAuthId = user.uid
            if(!nombreArticulo.value || !precioArticulo.value || !inventarioActual.value || !descripcionArticulo.value){
                showMessages('Todos los campos son obligatorios', 'no')
                return
            } else {
                try{    
                    const docRef = await addDoc(collection(db, 'productos'),{
                        nombreArticulo: nombreArticulo.value,
                        precioArticulo: precioArticulo.value,
                        inventarioActual: parseInt(inventarioActual.value),
                        descripcionArticulo: descripcionArticulo.value,
                        nombreCliente: nombreCliente,
                        userAuthId: userAuthId
                    })
    
                    nombreArticulo.value = ''
                    precioArticulo.value = ''
                    inventarioActual.value = ''
                    descripcionArticulo.value = ''
    
                    showMessages('Prodcto agregado!')
                } catch(error){
                    console.log(error);
                }
            }
            
        } else {
            console.log('user is not logged')
        }
    })
})

