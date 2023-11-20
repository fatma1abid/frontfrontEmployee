
// Importez les bibliothèques nécessaires
import { Component, OnInit, ViewChild } from '@angular/core';
import { EvenementService } from 'src/app/core/services/EvenementService';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { CalendarOptions, EventApi } from '@fullcalendar/core';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: any;
  events: any[] = [];
  selectedEvent: any;
  formattedDate!: string;
  urlImage : string  = 'http://localhost:8082/images_events' ;


  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.events,
    dateClick: this.handleDateClick.bind(this),
    eventDidMount: this.eventDidMount.bind(this),
    editable: true,
    eventDrop: this.handleEventDrop.bind(this),
  };

  constructor(private evenementService: EvenementService , private router: Router ) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.evenementService.getAllEvents().subscribe(
      (events) => {
        console.log('Events:', events);
        this.events = events.map((event) => ({
          id: event.idEvenement,
          title: event.nomE,
          date: moment(event.dateDebut).toISOString(),
          eventDetails: {
            idEvenement: event.idEvenement,
            dateDebut: event.dateDebut,
            dateFin: event.dateFin,
            lieu: event.lieu,
            description: event.description,
            etatEvent: event.etatEvent,
            image:event.image,
          },
        }));

        this.calendarOptions.events = this.events;
      },
      (error) => {
        console.error('Error loading events:', error);
      }
    );
  }

  handleEventDrop(arg: { event: EventApi; oldEvent: EventApi; el: HTMLElement; delta: any; revert: () => void }) {
    const eventId = parseInt(arg.event.id, 10);

    if (!eventId || isNaN(eventId)) {
      console.error('Error: Event ID is empty or invalid');
      arg.revert();
      return;
    }

    const newStartDate = arg.event.start;

    if (newStartDate !== null) {
      this.evenementService.updateEventStartDate(eventId, newStartDate).subscribe(
        (response) => {
          this.loadEvents();
        },
        (error) => {
          console.error('Error updating event start date:', error);
          arg.revert();
        }
      );
    } else {
      console.error('Error: newStartDate is null');
      arg.revert();
    }
  }

  handleDateClick(arg: any) {
    try {
      const clickedDate = moment(arg.date).startOf('day');
      this.selectedEvent = this.events.find((event) =>
        moment(event.date).startOf('day').isSame(clickedDate)
      );

      if (this.selectedEvent) {
        this.prepareEventData();
        this.showEventDetailsPopup();
      }
    } catch (error) {
      console.error('An error occurred in handleDateClick:', error);
    }
  }

  prepareEventData() {
    const dateDebut = this.selectedEvent?.eventDetails?.dateDebut;

    if (dateDebut !== null && dateDebut !== undefined) {
      this.formattedDate = moment(dateDebut).format('DD/MM/YY');
    } else {
      this.formattedDate = 'N/A';
    }
  }
  navigateToEdit(id: number) {
    this.router.navigate(['/admin/evenement/updateevent', id]);
  }
  showEventDetailsPopup() {
    Swal.fire({
      title: this.selectedEvent.title,
      html: `
      <div>
      <img src="http://localhost:8082/images_events/${this.selectedEvent.eventDetails.idEvenement}/${this.selectedEvent.eventDetails.image}" alt="Image" style="max-width: 100%;">
    </div>
        Date: ${this.formattedDate}
        <br>
        Lieu: ${this.selectedEvent.eventDetails.lieu}
        <br>
        Description: ${this.selectedEvent.eventDetails.description}
      `,
      confirmButtonText: 'Fermer',
      showCancelButton: true,
      footer: `
        <button class="btn btn-secondary" id="modifyBtn">Modifier</button>
        <button class="btn btn-danger" id="deleteBtn">Supprimer</button>
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the "Fermer" button click
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle the cancel button click
      } else if (result.dismiss === Swal.DismissReason.close) {
        // Handle the close button click
      }
  
      // Add event listeners for the custom buttons
      const modifyBtn = document.getElementById('modifyBtn');
      const deleteBtn = document.getElementById('deleteBtn');
  
      if (modifyBtn) {
        modifyBtn.addEventListener('click', () => {
          // Handle modify button click
          this.navigateToEdit(this.selectedEvent.eventDetails.idEvenement); // Call your navigation function here
        });
      }
  
      if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
          // Handle delete button click
          // You can call a function to initiate the deletion process
        });
      }
    });
  }
 

  eventDidMount(arg: { event: EventApi; el: HTMLElement }) {
    const etatEvent = arg.event.extendedProps['eventDetails']?.etatEvent;

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
  navigateToAdd() {
    this.router.navigate(['/admin/evenement/addevent']);
  }
    
}
