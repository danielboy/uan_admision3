import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultadosLicenciaturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados-licenciatura',
  templateUrl: 'resultados-licenciatura.html',
})
export class ResultadosLicenciaturaPage {

  areas: any;
  programas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.areas = {
    '6': 'ÁREA DE ARTES',
    '5': 'CIENCIAS BÁSICAS E INGENIERIAS',
    '4': 'CIENCIAS BIOLÓGICO-AGROPECUARIAS Y PESQUERAS',
    '1': 'CIENCIAS DE LA SALUD',
    '3': 'CIENCIAS ECONÓMICO-ADMINISTRATIVAS',
    '2': 'CIENCIAS SOCIALES Y HUMANIDADES',
  };
  this.programas =[
    {'ida': '1', 'carreras':'Medico Cirujano'},
    {'ida': '1', 'carreras':'Enfermeria'},
    {'ida': '1', 'carreras':'Odontologia'},
    {'ida': '2', 'carreras':'Derecho'},
    {'ida': '2', 'carreras':'Filosofia'},
  ];

  }


}
