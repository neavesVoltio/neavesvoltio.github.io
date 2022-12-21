import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { app } from './firebase.js'
const db = getFirestore(app) 
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js'


onAuthStateChanged(auth, async (user) => {
if (user) {
  const reserva = query(collection(db, 'reservaciones'));
  //query(collection(db, 'reservaciones'), where('email', '==', user.email));
  const querySnapshot = await getDocs(reserva);
  const allData = querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
   //console.log(doc.id, ' => ', doc.data());
    // console.log('start');
   let today = new Date()
   let newDate = new Date(doc.data().start)
   if(today>newDate){
    return
   }
   let hours = newDate.getHours() < 10 ?  '0'+ newDate.getHours() : newDate.getHours()
   let minutes = newDate.getMinutes() < 10 ?  '0'+ newDate.getMinutes() : newDate.getMinutes()
   let date = newDate.getDate() + '/' + newDate.getMonth() + '/' + newDate.getFullYear() + ' ' + hours+':'+minutes+' hrs'
   let services = doc.data().services;
   // try {services.forEach(e => console.log(e))} catch(error){console.log(error);}
   
    //for(i=0, i < doc.data().services.length(), i++){
     // services.push(...doc.data().services)
   // }
    let mainDiv = document.getElementById('reservasContainer')
    let divContainer = document.createElement('div')
    let divCard = document.createElement('div')
    let divCardHeader = document.createElement('div')
    let h4Date = document.createElement('h4')
    let divCardBoddy = document.createElement('div')
    let h4CustomerName = document.createElement('h4')
    let pServicios = document.createElement('p')
    let divPrecioInicial = document.createElement('div')
    let divFormSelect = document.createElement('div')
    let selectAssignedName = document.createElement('select')
    let optionEmployee1 = document.createElement('option')
    let optionEmployee2 = document.createElement('option')
    let labelAssignedName = document.createElement('label')
    let divFormTotalCobrado = document.createElement('div')
    let inputTotalCobrado = document.createElement('input')
    let labelTotalCobrado = document.createElement('label')
    let divFormDesc = document.createElement('div')
    let inputDesc = document.createElement('input')
    let labelDesc = document.createElement('label')
    let divFormObservac = document.createElement('div')
    let textAreaObservac = document.createElement('textarea')
    let labelObservac = document.createElement('label')
    let divCardFooter = document.createElement('div')
    let divMenuDropdown = document.createElement('div')
    let buttonMenu = document.createElement('button')
    let ulDropdownMenu = document.createElement('ul')
    let liEditar = document.createElement('li')
    let liCancelar = document.createElement('li')
    let liReAgendar = document.createElement('li')
    let liCompletada = document.createElement('li')
    let btnEditar = document.createElement('button')
    let btnCancelar = document.createElement('button')
    let btnReAgendar = document.createElement('button')
    let btnCompletada = document.createElement('button')

    divContainer.className = 'col'
    divCard.className = 'card shadow col'
    divCardHeader.className = 'card-header'
    h4Date.className = 'fw-bold text-center'
    h4Date.textContent = date
    divCardBoddy.className = 'card-boddy p-2'
    h4CustomerName.className = 'fw-bold text-center'
    h4CustomerName.textContent = doc.data().title
    pServicios.className = 'text-center'
    pServicios.textContent = services
    divPrecioInicial.className = 'h5 p-2 fw-bolder text-end'
    divPrecioInicial.textContent = 'Precio Inicial: $ 500.00'
    divFormSelect.className = 'form-floating mb-2'
    selectAssignedName.className = 'form-select text-end'
    optionEmployee1.textContent = 'Brenda'
    optionEmployee2.textContent = 'Ana'
    labelAssignedName.textContent = 'Asignado a:'
    divFormTotalCobrado.className = 'form-floating mb-2'
    inputTotalCobrado.className = 'form-control text-end'
    inputTotalCobrado.type = 'number'
    inputTotalCobrado.name = 'price'
    labelTotalCobrado.textContent = 'Total cobrado'
    divFormDesc.className = 'form-floating mb-2'
    inputDesc.className = 'form-control text-end'
    inputDesc.type = 'text'
    inputDesc.name = 'descuento'
    labelDesc.textContent = 'Codigo de descuento'
    divFormObservac.className = 'form-floating mb-2'
    textAreaObservac.className = 'form-control'
    textAreaObservac.textContent = 'Esta es la descripcion del servicio a realizar'
    labelObservac.textContent = 'Observaciones'
    divCardFooter.className = 'card-footer'
    divMenuDropdown.className = 'dropdown'
    buttonMenu.className = 'btn btn-primary dropdown-toggle'
    buttonMenu.type = 'button'
    buttonMenu.setAttribute("data-bs-toggle", "dropdown");
    buttonMenu.dataBsToggle="dropdown"
    buttonMenu.textContent="Acciones"
    ulDropdownMenu.className = 'dropdown-menu'
    liEditar
    liCancelar
    liReAgendar
    liCompletada
    btnEditar.className = 'dropdown-item'
    btnEditar.type = 'button'
    btnEditar.textContent = 'Editar'
    btnCancelar.className = 'dropdown-item'
    btnCancelar.type = 'button'
    btnCancelar.textContent = 'Cancelar'
    btnReAgendar.className = 'dropdown-item'
    btnReAgendar.type = 'button'
    btnReAgendar.textContent = 'Re Agendar'
    btnCompletada.className = 'dropdown-item'
    btnCompletada.type = 'button'
    btnCompletada.textContent = 'Completada'


    mainDiv.appendChild(divContainer)
    divContainer.appendChild(divCard)
    divCard.appendChild(divCardHeader)
    divCard.appendChild(divCardBoddy)
    divCard.appendChild(divCardFooter)
    divCardHeader.append(h4Date)
    divCardBoddy.append(h4CustomerName)
    divCardBoddy.append(pServicios)
    divCardBoddy.append(divPrecioInicial)
    divCardBoddy.append(divFormSelect)
    divCardBoddy.append(divFormTotalCobrado)
    divCardBoddy.append(divFormDesc)
    divCardBoddy.append(divFormObservac)
    divFormSelect.appendChild(selectAssignedName)
    selectAssignedName.append(optionEmployee1)
    selectAssignedName.append(optionEmployee2)
    divFormSelect.appendChild(selectAssignedName)
    divFormTotalCobrado.appendChild(inputTotalCobrado)
    divFormTotalCobrado.appendChild(labelTotalCobrado)
    divFormDesc.appendChild(inputDesc)
    divFormDesc.appendChild(labelDesc)
    divFormObservac.appendChild(textAreaObservac)
    divFormObservac.appendChild(labelObservac)
    divCardFooter.append(divMenuDropdown)
    divMenuDropdown.append(buttonMenu)
    divMenuDropdown.append(ulDropdownMenu)
    ulDropdownMenu.appendChild(liEditar)
    ulDropdownMenu.appendChild(liCancelar)
    ulDropdownMenu.appendChild(liReAgendar)
    ulDropdownMenu.appendChild(liCompletada)
    liEditar.appendChild(btnEditar)
    liCancelar.appendChild(btnCancelar)
    liReAgendar.appendChild(btnReAgendar)
    liCompletada.appendChild(btnCompletada)
    
  })


} else {
  console.log('no user logged on reservation admin');
}
});




/*
<div class="col">           // divContainer *
<div class="card shadow col">   // divCard
  <div class="card-header ">    // divCardHeader
    <h4 class="fw-bold text-center">14/12/2022 10:30 hrs</h4>   // h4Date
  </div>
  <div class="card-boddy p-2">  // divCardBoddy
      <h4 class="fw-bold text-center">Ana Luisa Torres</h4>     // h4CustomerName
      <p class="text-center">Corte de cabello, tratamiento de uñas, masaje relajante</p>    // pServicios
      <div class="h5 p-2 fw-bolder text-end">Precio Inicial: $ 500.00</div>                 // divPrecioInicial
      <div class="form-floating mb-2">          // divFormSelect
        <select class="form-select text-end">   // selectAssignedName
          <option>Brenda</option>               // optionEmployee1
          <option>Nelly</option>                // optionEmployee2
        </select>
        <label>Asignado a:</label>              // labelAssignedName
      </div>
      <div class="form-floating mb-2">          // divFormTotalCobrado
        <input type="number" name="price" class="form-control text-end">    // inputTotalCobrado 
        <label>Total cobrado</label>            // labelTotalCobrado
      </div>
      <div class="form-floating mb-2">          // divFormDesc
        <input type="text" name="descuento" class="form-control text-end"> // inputDesc
        <label>Codigo de descuento</label>      // labelDesc
      </div>
      <div class="form-floating mb-2">          // divFormObservac
        <textarea class="form-control"> xxxx    // textAreaObservac
        </textarea>                             
        <label>Observaciones</label>            // labelObservac
      </div>
  </div>
  <div class="card-footer">                     // divCardFooter
    <div class="dropdown">                      // divMenuDropdown
      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">Menu</button> // buttonMenu
      <ul class="dropdown-menu">                // ulDropdownMenu
        <li><button class="dropdown-item" type="button">Editar</button></li>            // liEditar
        <li><button class="dropdown-item" type="button">Cancelar cita</button></li>     // liCancelar
        <li><button class="dropdown-item" type="button">Re-agendar</button></li>        // liReAgendar
        <li><button class="dropdown-item" type="button">Completada</button></li>        // liCompletada
      </ul>
    </div>
  </div>
</div>
</div>
*/