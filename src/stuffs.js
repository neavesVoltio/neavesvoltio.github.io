// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDoc, doc, getDocs,  addDoc, setDoc  } 
from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGkZLzdozKH9_u8xdHfsJDXXsbsS8EqEM",
  authDomain: "mudanzas-chile.firebaseapp.com",
  projectId: "mudanzas-chile",
  storageBucket: "mudanzas-chile.appspot.com",
  messagingSenderId: "352165796927",
  appId: "1:352165796927:web:c892b91de8d6b16711ec8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const db = getFirestore(app) 

function sweetAlertSuccess(sweetAlertMessage){
  Swal.fire({
      title: 'Success!',
      text: sweetAlertMessage,
      icon: 'success',
      confirmButtonText: ';)'
    })
}

function sweetAlertError(sweetAlertMessage){
  Swal.fire({
      title: 'ups!',
      text: sweetAlertMessage,
      icon: 'warning',
      confirmButtonText: 'Back'
    })
}


const customerName = document.getElementById("nombreCliente") 
const customerEmail = document.getElementById("email") 
const showBodega = document.getElementById("tipoDeCasaRecoleccion") 
const showBodegaDestino = document.getElementById("tipoDeCasaDestino") 
const botonGuardar = document.getElementById("botonGuardar") 
const saveNameToDataBase = document.getElementById("saveNameToDataBase")
const nextCarouselButton = document.getElementById("nextCarouselButton")
const backSlideButton = document.getElementById("backSlideButton")
let userId = ''


saveNameToDataBase.addEventListener('click', async func => {
 let nombreCliente = document.getElementById("nombreCliente").value;
 let email = document.getElementById("email").value;
 let emailValid = document.getElementById("email").checkValidity(); 
 let telefono = document.getElementById("telefono").value;

  document.getElementById("alertMessage").style.display = "none";

  if (
      nombreCliente === "" ||
      email === "" ||
      telefono === "" ||
      !emailValid
  ) {
      sweetAlertError("Nombre, email y telefono son requeridos")
      
      return;
  }

  try {
      $("#carouselExampleControls").carousel("next");
      const docRef = await addDoc(collection(db, "users"), {
        nombre: nombreCliente,
        email: email,
        telefono: telefono
      });
      console.log("Document written with ID: ", docRef.id);
      userId = docRef.id
    } catch (e) {
      console.error("Error adding document: ", e);

    }
})


botonGuardar.addEventListener('click', async func => {
  let nombreCliente = document.getElementById("nombreCliente").value;
  let email = document.getElementById("email").value;

  let usersData = {
      nombreCliente: nombreCliente,
      email:email,
  
  }
      
      const docRef = doc(db, "users", userId );
      setDoc(docRef, usersData)  
      .then(() => {
         sweetAlertSuccess('Se ha agregado la informacion correctamente')
      })
      .catch(error => {
          sweetAlertError('Ha ocurrido un error')
      })
})



async function setCotizacion() {
  console.log('set cotizacion')
  try {
      const docRef = await addProduct( {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  return
var cotizacion = {};

cotizacion.nombreCliente =
  document.getElementById("nombreCliente").value;
cotizacion.email = document.getElementById("email").value;
cotizacion.telefono = document.getElementById("telefono").value;
cotizacion.fecha = document.getElementById("fecha").value;
cotizacion.tipoDeCasaRecoleccion = document.getElementById(
  "tipoDeCasaRecoleccion"
).value;
cotizacion.bodegaSize = document.getElementById("bodegaSize").value;
cotizacion.pisoDepartamentoRecoleccion = document.getElementById(
  "pisoDepartamentoRecoleccion"
).value;
cotizacion.elevadorRecoleccion = document.getElementById(
  "elevadorRecoleccion"
).value;
cotizacion.comunaRecoleccion =
  document.getElementById("comunaRecoleccion").value;
cotizacion.tipoDeCasaDestino =
  document.getElementById("tipoDeCasaDestino").value;
cotizacion.bodegaInputDestino =
  document.getElementById("bodegaInputDestino").value;
cotizacion.pisoDepartamentoDestino = document.getElementById(
  "pisoDepartamentoDestino"
).value;
cotizacion.elevadorDestino =
  document.getElementById("elevadorDestino").value;
cotizacion.comunaDestino =
  document.getElementById("comunaDestino").value;
cotizacion.estacionamiento =
  document.getElementById("estacionamiento").value;
cotizacion.estacionamientoDestino = document.getElementById(
  "estacionamientoDestino"
).value;
cotizacion.alfombraComedor =
  document.getElementById("alfombraComedor").value;
cotizacion.buffetComedor =
  document.getElementById("buffetComedor").value;
cotizacion.carroDeTeComedor =
  document.getElementById("carroDeTeComedor").value;
cotizacion.cavaVinoComedor =
  document.getElementById("cavaVinoComedor").value;
cotizacion.cuadrosComedor =
  document.getElementById("cuadrosComedor").value;
cotizacion.estanteComedor =
  document.getElementById("estanteComedor").value;
cotizacion.mesaComedor = document.getElementById("mesaComedor").value;
cotizacion.sillaComedor = document.getElementById("sillaComedor").value;
cotizacion.sillasAltasComedor =
  document.getElementById("sillasAltasComedor").value;
cotizacion.alfombraDormitorio =
  document.getElementById("alfombraDormitorio").value;
cotizacion.boxkingDormitorio =
  document.getElementById("boxkingDormitorio").value;
cotizacion.cajoneraDormitorio =
  document.getElementById("cajoneraDormitorio").value;
cotizacion.camaUnaymediaPlazaDormitorio = document.getElementById(
  "camaUnaymediaPlazaDormitorio"
).value;
cotizacion.camaUnaPlazaDormitorio = document.getElementById(
  "camaUnaPlazaDormitorio"
).value;
cotizacion.camaDosPlazasDormitorio = document.getElementById(
  "camaDosPlazasDormitorio"
).value;
cotizacion.camaNidoDormitorio =
  document.getElementById("camaNidoDormitorio").value;
cotizacion.camaroteDormitorio =
  document.getElementById("camaroteDormitorio").value;
cotizacion.comodaDormitorio =
  document.getElementById("comodaDormitorio").value;
cotizacion.cuadroDormitorio =
  document.getElementById("cuadroDormitorio").value;
cotizacion.cunaDormitorio =
  document.getElementById("cunaDormitorio").value;
cotizacion.escritorioDormitorio = document.getElementById(
  "escritorioDormitorio"
).value;
cotizacion.escritorioGrandeDormitorio = document.getElementById(
  "escritorioGrandeDormitorio"
).value;
cotizacion.espejoDormitorio =
  document.getElementById("espejoDormitorio").value;
cotizacion.estufaDormitorio =
  document.getElementById("estufaDormitorio").value;
cotizacion.mesapcDormitorio =
  document.getElementById("mesapcDormitorio").value;
cotizacion.mesatvDormitorio =
  document.getElementById("mesatvDormitorio").value;
cotizacion.mudadorDormitorio =
  document.getElementById("mudadorDormitorio").value;
cotizacion.muebleclosetDormitorio = document.getElementById(
  "muebleclosetDormitorio"
).value;
cotizacion.sillaDormitorio =
  document.getElementById("sillaDormitorio").value;
cotizacion.tocadorDormitorio =
  document.getElementById("tocadorDormitorio").value;
cotizacion.veladorDormitorio =
  document.getElementById("veladorDormitorio").value;
cotizacion.alacenaEstar = document.getElementById("alacenaEstar").value;
cotizacion.banquetaEstar =
  document.getElementById("banquetaEstar").value;
cotizacion.baulEstar = document.getElementById("baulEstar").value;
cotizacion.escritorioEstar =
  document.getElementById("escritorioEstar").value;
cotizacion.futtonEstar = document.getElementById("futtonEstar").value;
cotizacion.libreroChicoEstar =
  document.getElementById("libreroChicoEstar").value;
cotizacion.libreroGrandeEstar =
  document.getElementById("libreroGrandeEstar").value;
cotizacion.muebleLicoreroEstar = document.getElementById(
  "muebleLicoreroEstar"
).value;
cotizacion.rackMusicaEstar =
  document.getElementById("rackMusicaEstar").value;
cotizacion.rackTVEstar = document.getElementById("rackTVEstar").value;
cotizacion.sofaCamaEstar =
  document.getElementById("sofaCamaEstar").value;
cotizacion.televisorEstar =
  document.getElementById("televisorEstar").value;
cotizacion.alfombraLiving =
  document.getElementById("alfombraLiving").value;
cotizacion.barLiving = document.getElementById("barLiving").value;
cotizacion.barLicoreroLiving =
  document.getElementById("barLicoreroLiving").value;
cotizacion.bergereLiving =
  document.getElementById("bergereLiving").value;
cotizacion.bibliotecaLiving =
  document.getElementById("bibliotecaLiving").value;
cotizacion.carroLicorero =
  document.getElementById("carroLicorero").value;
cotizacion.cuadrosLiving =
  document.getElementById("cuadrosLiving").value;
cotizacion.equipoEstereoLiving = document.getElementById(
  "equipoEstereoLiving"
).value;
cotizacion.escanoLiving = document.getElementById("escanoLiving").value;
cotizacion.espejoMuralLiving =
  document.getElementById("espejoMuralLiving").value;
cotizacion.esquineroLiving =
  document.getElementById("esquineroLiving").value;
cotizacion.lamparaLiving =
  document.getElementById("lamparaLiving").value;
cotizacion.lateralesLiving =
  document.getElementById("lateralesLiving").value;
cotizacion.MecedoraLiving =
  document.getElementById("MecedoraLiving").value;
cotizacion.mesaArrimoLiving =
  document.getElementById("mesaArrimoLiving").value;
cotizacion.mesaCentroLiving =
  document.getElementById("mesaCentroLiving").value;
cotizacion.pedestalMarmolLiving = document.getElementById(
  "pedestalMarmolLiving"
).value;
cotizacion.puffLiving = document.getElementById("puffLiving").value;
cotizacion.sillonesLiving =
  document.getElementById("sillonesLiving").value;
cotizacion.sitialesLiving =
  document.getElementById("sitialesLiving").value;
cotizacion.sofaDosLiving =
  document.getElementById("sofaDosLiving").value;
cotizacion.sofaTresLiving =
  document.getElementById("sofaTresLiving").value;
cotizacion.videoDVDLiving =
  document.getElementById("videoDVDLiving").value;
cotizacion.vitrinaLiving =
  document.getElementById("vitrinaLiving").value;
cotizacion.biomboLiving = document.getElementById("biomboLiving").value;

google.script.run
  .withSuccessHandler(function (res) {
  document
      .getElementById("save-success-message")
      .classList.remove("invisible");

  setTimeout(function () {
      document
      .getElementById("save-success-message")
      .classList.add("invisible");
  }, 2000);
  })
  .agregarCotizacion(cotizacion);

document.getElementById("nombreCliente").value = "";
document.getElementById("email").value = "";
document.getElementById("telefono").value = "";
document.getElementById("fecha").value = "";
document.getElementById("tipoDeCasaRecoleccion").value = "";
document.getElementById("bodegaSize").value = "";
document.getElementById("pisoDepartamentoRecoleccion").value = "";
document.getElementById("elevadorRecoleccion").value = "";
document.getElementById("comunaRecoleccion").value = "";
document.getElementById("tipoDeCasaDestino").value = "";
document.getElementById("bodegaInputDestino").value = "";
document.getElementById("pisoDepartamentoDestino").value = "";
document.getElementById("elevadorDestino").value = "";
document.getElementById("comunaDestino").value = "";
document.getElementById("estacionamiento").value = "";
document.getElementById("estacionamientoDestino").value = "";
document.getElementById("alfombraComedor").value = "";
document.getElementById("buffetComedor").value = "";
document.getElementById("carroDeTeComedor").value = "";
document.getElementById("cavaVinoComedor").value = "";
document.getElementById("cuadrosComedor").value = "";
document.getElementById("estanteComedor").value = "";
document.getElementById("mesaComedor").value = "";
document.getElementById("sillaComedor").value = "";
document.getElementById("sillasAltasComedor").value = "";
document.getElementById("alfombraDormitorio").value = "";
document.getElementById("boxkingDormitorio").value = "";
document.getElementById("cajoneraDormitorio").value = "";
document.getElementById("camaUnaymediaPlazaDormitorio").value = "";
document.getElementById("camaUnaPlazaDormitorio").value = "";
document.getElementById("camaDosPlazasDormitorio").value = "";
document.getElementById("camaNidoDormitorio").value = "";
document.getElementById("camaroteDormitorio").value = "";
document.getElementById("comodaDormitorio").value = "";
document.getElementById("cuadroDormitorio").value = "";
document.getElementById("cunaDormitorio").value = "";
document.getElementById("escritorioDormitorio").value = "";
document.getElementById("escritorioGrandeDormitorio").value = "";
document.getElementById("espejoDormitorio").value = "";
document.getElementById("estufaDormitorio").value = "";
document.getElementById("mesapcDormitorio").value = "";
document.getElementById("mesatvDormitorio").value = "";
document.getElementById("mudadorDormitorio").value = "";
document.getElementById("muebleclosetDormitorio").value = "";
document.getElementById("sillaDormitorio").value = "";
document.getElementById("tocadorDormitorio").value = "";
document.getElementById("veladorDormitorio").value = "";
document.getElementById("alacenaEstar").value = "";
document.getElementById("banquetaEstar").value = "";
document.getElementById("baulEstar").value = "";
document.getElementById("escritorioEstar").value = "";
document.getElementById("futtonEstar").value = "";
document.getElementById("libreroChicoEstar").value = "";
document.getElementById("libreroGrandeEstar").value = "";
document.getElementById("muebleLicoreroEstar").value = "";
document.getElementById("rackMusicaEstar").value = "";
document.getElementById("rackTVEstar").value = "";
document.getElementById("sofaCamaEstar").value = "";
document.getElementById("televisorEstar").value = "";
document.getElementById("alfombraLiving").value = "";
document.getElementById("barLiving").value = "";
document.getElementById("barLicoreroLiving").value = "";
document.getElementById("bergereLiving").value = "";
document.getElementById("bibliotecaLiving").value = "";
document.getElementById("carroLicorero").value = "";
document.getElementById("cuadrosLiving").value = "";
document.getElementById("equipoEstereoLiving").value = "";
document.getElementById("escanoLiving").value = "";
document.getElementById("espejoMuralLiving").value = "";
document.getElementById("esquineroLiving").value = "";
document.getElementById("lamparaLiving").value = "";
document.getElementById("lateralesLiving").value = "";
document.getElementById("MecedoraLiving").value = "";
document.getElementById("mesaArrimoLiving").value = "";
document.getElementById("mesaCentroLiving").value = "";
document.getElementById("pedestalMarmolLiving").value = "";
document.getElementById("puffLiving").value = "";
document.getElementById("sillonesLiving").value = "";
document.getElementById("sitialesLiving").value = "";
document.getElementById("sofaDosLiving").value = "";
document.getElementById("sofaTresLiving").value = "";
document.getElementById("videoDVDLiving").value = "";
document.getElementById("vitrinaLiving").value = "";
document.getElementById("biomboLiving").value = "";
document.getElementById("alertMessage").textContent =
  "Los datos se han enviado correctamente " +
  cotizacion.nombreCliente +
  ". Envianos un WhatsApp con las fotos de los muebles";
google.script.run.sendEmail(cotizacion.nombreCliente, cotizacion.email);
document.getElementById("alertMessageSuccess").style.display = "block";
}

function sendWhatsapp() {
console.log("start nombreTextitle");
var nombre = document.getElementById("nombreCliente").value;
var email = document.getElementById("email").value;
//var titulo = document.getElementById("textoNombre");
//var tituloFinal = document.getElementById("textoFinal");
//var link = document.getElementById("botonWhatsapp");
var baseUrl =
  "https://api.whatsapp.com/send?phone=5218115704745&text=Hola+Me+interesa+su+servicio+de+Mudanzas+mi+nombre+es+" +
  nombre +
  " y+mi+email+es " +
  email +
  "";
console.log(nombre);
console.log(email);
document.getElementById("alertMessageSuccess").style.display = "none";
document.getElementById("alertMessage").style.display = "none";
document.getElementById("alertMessageEmail").style.display = "none";
//titulo.textContent =
//  "Gracias " + nombre + "! ¿Cuándo necesitas el servicio?";
//tituloFinal.textContent =
"Muchas Gracias " +
  //  nombre +
  "! Vamos a enviar esta información a nuestro equipo de Mudanzas";
console.log(baseUrl);
link.setAttribute("href", baseUrl);
}

