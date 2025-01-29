import { Component } from '@angular/core';
import {  IonHeader, IonToolbar, IonTitle, IonAvatar, IonIcon, IonItem, IonLabel, IonList  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplane, bluetooth, call, wifi } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonAvatar, IonIcon, IonItem, IonLabel, IonList ],
})
export class Tab3Page {
  constructor() {
    addIcons({ airplane, bluetooth, call, wifi });
  }
}