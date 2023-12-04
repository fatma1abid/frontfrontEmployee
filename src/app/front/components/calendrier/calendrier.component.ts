import { Bibliotheque } from 'src/app/core/models/Bibliotheque.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EvenementService } from 'src/app/core/services/EvenementService';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { CalendarOptions, EventApi } from '@fullcalendar/core';
import * as moment from 'moment';
import { Evenement } from 'src/app/core/models/Evenement.model';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})

export class CalendrierComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: any;
  events: any[] = [];
  idBibliotheque!: number;
  evenement!: Evenement;

  urlImage : string  = 'http://localhost:8082/images_events' ;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.events,
  };

  constructor(private evenementService: EvenementService ) {}

  ngOnInit() {
    this.loadEvents();
  
  }
   
  loadEvents() {
    this.evenementService.getEventsByBibliotheque(this.idBibliotheque).subscribe(
      (events) => {
        console.log('Events:', events);
        this.events = events.map((event) => ({
          id: event.idEvenement,
          title: event.nomE,
          bibliotheque:Bibliotheque,
          date: moment(event.dateDebut).toISOString(),
          eventDetails: {
            bibliotheque:event.bibliotheque,
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

 


}