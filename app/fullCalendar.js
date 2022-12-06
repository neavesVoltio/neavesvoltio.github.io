
const myModal = new bootstrap.Modal(document.getElementById('setDateModal', {
  keyboard: false
}))
const selectedModal = document.getElementById('setDateModal')
      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          locale: 'es',
          headerToolbar: {
            left: 'prev, next, today',
            center: 'title',
            right: 'dayGridMonth, timeGridWeek, listWeek'
        
          },
          dateClick: function(info){
            console.log(info)
            let date = new Date(info.date)
            let day = date.getMonth()
            console.log(day)
            let reservationData = {}
            reservationData.dateStr = info.dateStr
            reservationData.systemDate = info.date
              document.getElementById('start').innerHTML = info.dateStr
              myModal.show()
          }
        });
        calendar.render();
      });

    