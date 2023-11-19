// Importez les bibliothèques nécessaires
import { Component, OnInit, ViewChild } from '@angular/core';
import { EvenementService } from 'src/app/core/services/EvenementService';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { CalendarOptions, EventApi } from '@fullcalendar/core';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import 'jquery';
import 'jquery-ui/ui/widgets/draggable';
declare var $: any;



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [DatePipe],
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: any; // Assurez-vous que le sélecteur est correct

  events: any[] = []; // Déclaration correcte ici

  selectedEvent: any;
  formattedDate!: string;
  displayEvent: any;
  constructor(private evenementService: EvenementService, private datePipe: DatePipe) {}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.events,
    dateClick: this.handleDateClick.bind(this),
    eventDidMount: this.eventDidMount.bind(this),
  };


  ngOnInit() {
    this.loadEvents();
    this.prepareEventData();
    this.initDraggable();
  }
  initDraggable() {
    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();

      new Draggable(calendarApi.el, {
        itemSelector: '.fc-event',
        eventData: (eventEl: any) => this.eventData(eventEl),
      });
    }
  }

  eventData = (eventEl: any) => {
    const eventTitle = eventEl.innerText.trim();
    const eventId = eventEl.getAttribute('data-event-id');

    const draggedEvent = this.events.find(
      (event: any) => event.title === eventTitle && event.id === eventId
    );

    return {
      event: draggedEvent,
    };
  };





  prepareEventData() {
    const dateDebut = this.selectedEvent?.eventDetails?.dateDebut;

    // Check if dateDebut is not null before transforming
    if (dateDebut !== null && dateDebut !== undefined) {
      // Use the non-null assertion operator (!) to tell TypeScript that dateDebut is not null
      this.formattedDate = this.datePipe.transform(dateDebut, 'dd/MM/yy')!;
    } else {
      // Handle the case where dateDebut is null (optional)
      this.formattedDate = 'N/A'; // or any default value you prefer
    }
  }

  loadEvents() {
    this.evenementService.getAllEvents().subscribe(
      (events) => {
        console.log('Events:', events);
        this.events = events.map((event) => ({
          title: event.nomE,
          date: moment(event.dateDebut).toISOString(),
          eventDetails: {
            dateDebut: event.dateDebut,
            dateFin: event.dateFin,
            lieu: event.lieu,
            description: event.description,
            etatEvent: event.etatEvent,
          },
        }));

        // Mettez à jour calendarOptions.events après avoir reçu les événements
        this.calendarOptions.events = this.events;
      },
      (error) => {
        console.error('Error loading events:', error);
      }
    );
  }

  eventDidMount(arg: { event: EventApi; el: HTMLElement }) {
    const etatEvent = arg.event.extendedProps['eventDetails']?.etatEvent;

    // Ajouter des styles en fonction de l'état
    if (etatEvent === 'ANNULE') {
      arg.el.style.backgroundColor = 'red';
      arg.el.style.color = 'white';
    } else if (etatEvent === 'REPORTE') {
      arg.el.style.backgroundColor = 'yellow';
    } else if (etatEvent === 'EN_COURS') {
      arg.el.style.backgroundColor = 'blue';
      arg.el.style.color = 'white';
    } else if (etatEvent === 'PLANIFIE') {
      arg.el.style.backgroundColor = 'green';
      arg.el.style.color = 'white';
    }
  }

  handleDateClick(arg: any) {
    try {
      const clickedDate = moment(arg.date).startOf('day');
      this.selectedEvent = this.events.find((event) =>
        moment(event.date).startOf('day').isSame(clickedDate)
      );

      if (this.selectedEvent) {
        this.prepareEventData(); // Call prepareEventData to format the date
        this.showEventDetailsPopup();
      }
    } catch (error) {
      console.error('An error occurred in handleDateClick:', error);
    }
  }

  showEventDetailsPopup() {
    Swal.fire({
      title: this.selectedEvent.title,
      html: `
        Date: ${this.formattedDate}
        <br>
        Lieu: ${this.selectedEvent.eventDetails.lieu}
        <br>
        Description: ${this.selectedEvent.eventDetails.description}
      `,
      confirmButtonText: 'Fermer',
    });
  }

  
}


