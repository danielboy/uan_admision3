import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import {ServiceProvider} from '../../../providers/service/service'

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
  providers: [ServiceProvider]
})
export class ResultadosLicenciaturaPage {

  areas: any;
  programas: any;
  resultados_programas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private service: ServiceProvider) {

  this.areas = {
    '6': 'ÁREA DE ARTES',
    '5': 'CIENCIAS BÁSICAS E INGENIERIAS',
    '4': 'CIENCIAS BIOLÓGICO-AGROPECUARIAS Y PESQUERAS',
    '1': 'CIENCIAS DE LA SALUD',
    '3': 'CIENCIAS ECONÓMICO-ADMINISTRATIVAS',
    '2': 'CIENCIAS SOCIALES Y HUMANIDADES',
  };
  this.programas =[
    { 'ida': '1', 'carreras':'Medico Cirujano'},
    {'ida': '1', 'carreras':'Enfermeria'},
    {'ida': '1', 'carreras':'Odontologia'},
    {'ida': '2', 'carreras':'Derecho'},
    {'ida': '2', 'carreras':'Filosofia'},
  ];




  }

  ionViewWillEnter(){

    let toast = this.toastCtrl.create({
      message: 'No Hay Resultados',
      duration: 2000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();

  }

    /*this.consulta()
      }

    consulta(){
        this.service.resultados_programas().then(data =>
          this.resultados_programas = data)
          console.log(this.resultados_programas)

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
      
      doRefresh(refresher) {
        this.service.resultados_programas().then(data =>
          this.resultados_programas = data)
          refresher.complete();
      }*/

}
