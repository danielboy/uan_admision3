import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {

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
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
  }

  ionViewDidEnter() {
    let toast = this.toastCtrl.create({
      message: 'No Hay Actualizaciones',
      duration: 2000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
