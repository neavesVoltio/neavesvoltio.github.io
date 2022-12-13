import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { app } from './firebase.js'
const db = getFirestore(app) 

export const productos = query(collection(db, 'productos'));
            //query(collection(db, 'reservaciones'), where('email', '==', user.email));
            const querySnapshot = await getDocs(productos);
            const allData = querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, ' => ', doc.data());

              let mainDiv = document.getElementById('productContainer')
              let divCol = document.createElement('div')
              let divCard = document.createElement('div')
              let img = document.createElement('img')
              let divBody = document.createElement('div')
              let h3ProductTitle = document.createElement('h3')
              let pProductDesc = document.createElement('p')
              let divProductprice = document.createElement('div')
              let spanMoneySign = document.createElement('span')
              let inputProductPrice = document.createElement('input')
              let spanMoneyCero = document.createElement('span')
              let divFormFloating = document.createElement('div')
              let inputInventario = document.createElement('input')
              let labelInventario = document.createElement('label')
              let divCardFooter = document.createElement('div')
              let aEliminarButton = document.createElement('a')
              let aGuardarButton = document.createElement('a')

              divCol.className = 'col'; divCard.className = 'card shadow col'; img.className = 'card-img-top'; divBody.className = 'card-body'
              spanMoneySign.className = 'input-group-text'; spanMoneyCero.className = 'input-group-text'; inputProductPrice.className = 'form-control'
              h3ProductTitle.className = 'card-title'; pProductDesc.className = 'card-text'; divProductprice.className = 'input-group mb-3 p-2'
              divFormFloating.className = 'form-floating mb-3 p-2'; inputInventario.className = 'form-control inputInventario'
              divCardFooter.className = 'card-footer'; aEliminarButton.className = 'card-link'; aGuardarButton.className = 'card-link'
              divCard.style.width = '100%'; divCard.style.height = '100%'
              inputProductPrice.type = 'number'
              img.src = 'https://images.hattons.co.uk/products340pxwide/noimageavailable.jpg'; img.alt = '...'
              inputInventario.type = 'number'; inputInventario.id = 'productId'
              labelInventario.for = 'productId'
              aEliminarButton.href = '#'; aEliminarButton.textContent = 'Eliminar'
              aGuardarButton.href = '#'; aGuardarButton.textContent = 'Guardar'
              h3ProductTitle.textContent = doc.data().nombreArticulo
              pProductDesc.textContent = doc.data().descripcionArticulo  
              inputProductPrice.value = doc.data().precioArticulo
              inputInventario.value = doc.data().inventarioActual
              spanMoneySign.textContent = '$'
              labelInventario.textContent = 'Inventario'

              mainDiv.appendChild(divCol)
              divCol.append(divCard)
              divCard.append(img)
              divCard.append(divBody)
              divCard.append(divFormFloating)
              divCard.append(divProductprice)
              divCard.append(divCardFooter)
              divBody.appendChild(h3ProductTitle)
              divBody.appendChild(pProductDesc)
              divFormFloating.appendChild(inputInventario)
              divFormFloating.appendChild(labelInventario)
              divCardFooter.appendChild(aEliminarButton)
              divCardFooter.appendChild(aGuardarButton)
              divProductprice.appendChild(spanMoneySign)
              divProductprice.appendChild(inputProductPrice)



            })
/*
<div class="col"> // divCol
    <div class="card shadow col" style="width: 100%; height: 100%;"> // divCard
    <img src="sa" class="card-img-top" alt="..."> // img
    <div class="card-body">                         // divBody
        <h3 class="card-title">Shampoo</h3>             // h3ProductTitle
        <p class="card-text">Shampoo Matizador</p>      // pProductDesc
        <p class="card-text">$29.99</p>                 // pProductprice
    </div>
    <div class="form-floating mb-3 p-2">            // divFormFloating
        <input type="number" class="form-control" id="inventarioProductoCard"/> // inputInventario
        <label for="inventarioProductoCard">Inventario</label> // labelInventario
    </div>
    <div class="card-footer">                      // divCardFooter
        <a href="#" class="card-link">Eliminar</a>      // aEliminarButton
        <a href="#" class="card-link">Guardar</a>       // aGuardarButton
    </div>
    </div>
</div> 

<div class="input-group mb-3"> // divProductprice
    <span class="input-group-text">$</span> //spanMoneySign
    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"> // inputProductPrice
    <span class="input-group-text">.00</span> //spanMoneyCero
</div>
*/