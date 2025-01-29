import { Component } from '@angular/core';
import { IonCheckbox, IonCol, IonGrid, IonRow ,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ IonCheckbox, IonCol, IonGrid, IonRow ,IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {
  constructor() {}
}
