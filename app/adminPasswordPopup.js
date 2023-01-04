import { GoogleAuthProvider, signInWithPopup  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import  {webDomain} from "../main.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
let adminDashboard = document.getElementById('adminDashboard')

adminDashboard.addEventListener('click', async (e) =>{
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            Swal.fire({
                text: 'Ingrese la contraseña de administrador',
                html:'<input type="password" name="adminPassword" id="adminPasswordInput" placeholder="admin password.."/>',
                showCancelButton: true,
                confirmButtonText: 'Acceder',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    let adminPasswordInput = document.getElementById('adminPasswordInput')
                    if(adminPasswordInput.value === 'admin123'){
                        window.open(webDomain + '/dashboard.html', '_self');
                    } else {
                        Swal.fire({
                            text: 'contraseña incorrecta',
                            showCancelButton: true,
                            confirmButtonText: 'Intentar nuevamente',
                            confirmButtonColor: '#3C8BF2',
                            icon: 'error',
                        }).then( () => {
                            console.log('object');
                        })
                    }
                    
                    console.log(adminPasswordInput.value);
                },
            })
            
        } else {
            Swal.fire({
              text: "Favor de iniciar sesión para poder recomendar",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Iniciar con Google',
              confirmButtonColor: '#3C8BF2',
              denyButtonText: `Iniciar con email`,
              denyButtonColor:'#007172',
              icon: "alert",
              customClass: {
                denyButton: 'color: #fffff'
              }
            })
        }
    })
})
