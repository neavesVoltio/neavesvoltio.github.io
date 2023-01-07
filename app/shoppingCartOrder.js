import { getFirestore, 
    doc, 
    getDoc, 
    collection, 
    getDocs, 
    query, 
    where, 
    deleteDoc, 
    orderBy, 
    updateDoc,
    addDoc  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { app } from './firebase.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js'

const db = getFirestore(app) 

let orderProductButton = document.querySelector('#orderProductButton')

orderProductButton.addEventListener('click', (e) => {
    setProductOrder(e)
})
    
export function setProductOrder(){
    onAuthStateChanged(auth, async (user) => {
        if(user){
            let docId = []
            const shippingCart = query(collection(db, 'shoppingCart'),
                                        where("userAuthId", "==", user.uid))
            const querySnapshot = await getDocs(shippingCart)
            const allData = querySnapshot.forEach( async(doc) => {
                docId.push(doc.id)
            });
            
            docId.forEach(async(e) =>{
                const docRef = doc(db, "shoppingCart", e) 
                await updateDoc ((docRef), {
                    orderStatus: 'Ordered'
                    })
            })
            
        } else {
            console.log('no user logged');
        }
    })

}

// A continuacion se debe filtrar por los productos no ordenados para mostrar en el carrito
// Los productos Ordenados se deben agregar al historial de ordenes del cliente
// En historial de ordenes se van a registrar los productos que finalemtne fueron pagados y recogidos en el salon
// Esto lo hacen los empleados para registrar entrada de dinero