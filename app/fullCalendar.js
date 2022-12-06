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
          if (user) {
            const reserva = query(collection(db, 'reservaciones'), where('email', '==', user.email));
            const querySnapshot = await getDocs(reserva);
            let pullData = []
            const allData = querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, ' => ', doc.data());
              pullData.push({title: doc.data().title, start: doc.data().start , color: '#00000'})
            })
            console.log(pullData)
    
            try{
              var calendarEl = document.getElementById('calendar');
              var calendar = new FullCalendar.Calendar(calendarEl, {
              initialView: 'dayGridMonth',
              locale: 'es',
              headerToolbar: {
                left: 'prev, next, today',
                center: 'title',
                right: 'dayGridMonth, timeGridWeek'
            
              },
              events:[ ...pullData],
              eventTimeFormat: { // like '14:30:00'
                hour: '2-digit',
                minute: '2-digit',
                //second: '2-digit',
                meridiem: false
              },
              defaultTimedEventDuration: 2,
              dateClick: function(info){
                console.log(info)
    
                let date = new Date(info.date)
      
    
                const months = ["ENE", "FEB", "MAR", 'ABR', "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]
                if(date.getDate() < 10){
                const day = "0"+date.getDate()
                } else{
                  const day = date.getDate()
                }
                if(date.getMinutes() < 10){
                  const minute = "0"+date.getMinutes()
                } else{
                  const minute = date.getMinutes()
                }
                let hours = date.getHours()
                let hour = hours
                if(hour === 0 ){
                  calendar.changeView('timeGridDay', info.dateStr);
                  
                } else{
                  const myModal = new bootstrap.Modal(document.getElementById('setDateModal', {
                    keyboard: false
                  }))
                  const day = date.getDate()
                  const minute = date.getMinutes()
                  let reservationDate = 'Hola, te gustaría programar la cita el día '+ day  + " de " + months[date.getMonth()] + " del " + date.getFullYear() + " a las " + hour  + ":" + minute
                  document.getElementById('start').innerHTML = reservationDate
                  myModal.show()
                  const reservationButton = document.getElementById('reservationButton')
                  reservationButton.dataset.reservationDate = info.dateStr
                }
                 
                return info.date
              }
            });
            } catch (error){
              var calendarEl = document.getElementById('calendar');
              var calendar = new FullCalendar.Calendar(calendarEl, {
              initialView: 'dayGridMonth',
              locale: 'es',
              headerToolbar: {
                left: 'prev, next, today',
                center: 'title',
                right: 'dayGridMonth, timeGridWeek'
            
              },
              //events:[ pullData[0] ],
              eventTimeFormat: { // like '14:30:00'
                hour: '2-digit',
                minute: '2-digit',
                //second: '2-digit',
                meridiem: false
              },
              defaultTimedEventDuration: 2,
              dateClick: function(info){
                console.log(info)
    
                let date = new Date(info.date)
      
    
                const months = ["ENE", "FEB", "MAR", 'ABR', "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]
                if(date.getDate() < 10){
                const day = "0"+date.getDate()
                } else{
                  const day = date.getDate()
                }
                if(date.getMinutes() < 10){
                  const minute = "0"+date.getMinutes()
                } else{
                  const minute = date.getMinutes()
                }
                let hours = date.getHours()
                let hour = hours
                if(hour === 0 ){
                  calendar.changeView('timeGridDay', info.dateStr);
                  
                } else{
                  const myModal = new bootstrap.Modal(document.getElementById('setDateModal', {
                    keyboard: false
                  }))
                  const day = date.getDate()
                  const minute = date.getMinutes()
                  let reservationDate = 'Hola, te gustaría programar la cita el día '+ day  + " de " + months[date.getMonth()] + " del " + date.getFullYear() + " a las " + hour  + ":" + minute
                  document.getElementById('start').innerHTML = reservationDate
                  myModal.show()
                  const reservationButton = document.getElementById('reservationButton')
                  reservationButton.dataset.reservationDate = info.dateStr
                }
                 
                return info.date
              }
            });
            }
            
            calendar.render();
              
          } else {
              console.log('user is not logged')
          }
          });

       
      });

      


      
      
    