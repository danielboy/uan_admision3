import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.eventos = [{ date:"2018-02-24",nombre: "Dia de la Bandera",detalle:"La actual bandera de los Estados Unidos Mexicanos se adoptó desde el 16 de septiembre de 1968"},
    { date:"2018-02-24",nombre: "Dia de la Bandera",detalle:"La actual bandera de los Estados Unidos Mexicanos se adoptó desde el 16 de septiembre de 1968"}
  
  ]

  }
  

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
  }

}
