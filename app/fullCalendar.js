import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { app } from './firebase.js'
const db = getFirestore(app) 
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js'




      // start calendar
      const myModal = new bootstrap.Modal(document.getElementById('setDateModal', {
        keyboard: false
      }))

      const selectedModal = document.getElementById('setDateModal')
      
      export const calendarioUpdate = document.addEventListener('DOMContentLoaded', async function() {
        onAuthStateChanged(auth, async (user) => {
         // console.log(user)
          if (user) {
            const reserva = query(collection(db, 'reservaciones'));
            //query(collection(db, 'reservaciones'), where('email', '==', user.email));
            const querySnapshot = await getDocs(reserva);
            let pullData = []
            const allData = querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
             // console.log(doc.id, ' => ', doc.data());
              pullData.push({title: doc.data().title, start: doc.data().start , color: '#ab077f'})
            })
           // console.log(pullData)
    
            try{
              var calendarEl = document.getElementById('calendar');
              var calendar = new FullCalendar.Calendar(calendarEl, {
              slotMinTime: '08:00:00',
              slotMaxTime: '22:00:00',
              initialView: 'dayGridMonth',
              locale: 'es',
              headerToolbar: {
                left: 'prev, next, today',
                center: 'title',
                right: 'dayGridMonth, timeGridWeek'
            
              },
              hiddenDays: [ 1 ],
              buttonIcons:{
                prev: 'arrow-left',
                next: 'arrow-right',
              },
              //businessHours: { start: '08:00', end: '22:00', dow: [0, 1, 2, 3, 4, 5, 6] },
              eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
                eventDropOrResizeHandler(event, delta, revertFunc, jsEvent, ui, view);
              },
              eventResize: function (event, delta, revertFunc, jsEvent, ui, view) {
                eventDropOrResizeHandler(event, delta, revertFunc, jsEvent, ui, view);
              },
              events:[ ...pullData],
              eventOverlap: 'false',
              eventTimeFormat: { // like '14:30:00'
                hour: '2-digit',
                minute: '2-digit',
                //second: '2-digit',
                meridiem: false
              },
              defaultTimedEventDuration: '02:00',
              select: function(selectInfo){
                console.log(selectInfo.endStr)
                let endStr = selectInfo.endStr
                reservationButton.dataset.reservationDateEnd = endStr
              },
              dateClick: async function(info){
                
              let date = new Date(info.date)
              let months = ["ENE", "FEB", "MAR", 'ABR', "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]
              let hours = date.getHours()
              let year = date.getFullYear()
              let hour = hours
              let day = date.getDate()
              
              //  funcion para asignar fechas al modal 
                
                

                if(hour === 0 ){
                  calendar.changeView('timeGridDay', info.dateStr);
                  
                }  else {
                  const myModal = new bootstrap.Modal(document.getElementById('setDateModal', {
                    keyboard: false
                  }))

                  const day = date.getDate()
                  const minute = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()
                  let reservationDateDay = day+ months[date.getMonth()] +year
                  let overlapCount = []
                  let numberOfEmployees = 2
                  
                  // funcion para saber si hay overlap en las fechas seleccionadas 
                  let hourForOverlap = minute === 30 ? hour + 1.5 : hour + 1
                  let overlap = query(collection(db, 'reservaciones'), 
                                where('reservationDateDay', '==', reservationDateDay), 
                                where('reservationStartHour', '>=', hour),
                                where('reservationStartHour', '<=', hourForOverlap));  
                  const overlapSnapshot = await getDocs(overlap);
                  let allData = overlapSnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log('overlap');
                    console.log(doc.id, ' => ', doc.data());
                    overlapCount.push('1')
                  })
                  let employeesAvailable = 'No hay horario disponible, favor de seleccionar otro horario'
                  console.log(overlapCount.length);
//    Funcion que asigna los servicios 
                  let serviceCheck = document.querySelectorAll('.serviceCheck')
                  let services = []
                  serviceCheck.forEach( function(element) {
                    try{
                      services.push(' ' + element.attributes[4].value )
                    } catch(error){
                      console.log(error);
                    }})            
//    Funcion que asigna el mensaje al modal                   
                  let reservationDate = 'Hola, te gustaría programar la cita el día '+ day  + " de " + 
                  months[date.getMonth()] + " del " + date.getFullYear() + " a las " + hour  + ":" + minute
                  document.getElementById('start').innerHTML =  overlapCount.length >= numberOfEmployees ? employeesAvailable : reservationDate
                  document.getElementById('services').innerHTML = services
                  const reservationButton = document.getElementById('reservationButton')
                  if(overlapCount.length >= numberOfEmployees){
                    reservationButton.style.display = 'none'
                  }
                  reservationButton.dataset.reservationDate = info.dateStr
                  reservationButton.dataset.reservationDateDay = reservationDateDay
                  reservationButton.dataset.reservationStartHour = hour
                  reservationButton.dataset.reservationEndtHour = hour + 2

                  myModal.show()
                  
                }
                 
                return info.date
              }
            });
            } catch (error){
              console.log(error);
            }
            
            calendar.render();
              
          } else {
              console.log('user is not logged')
          }
          });

       
      });

      


      
      
    