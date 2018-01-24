import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ResultadosPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html'
})
export class ResultadosPage {

  listasDeResultadosRoot = 'ListasDeResultadosPage'
  miPuntajeRoot = 'MiPuntajePage'


  constructor(public navCtrl: NavController) {}

}
