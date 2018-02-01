import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-requisitos-licenciatura',
  templateUrl: 'requisitos-licenciatura.html',
})
export class RequisitosLicenciaturaPage {

  pagos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {

    this.pagos = {
      prepa:' 1,164.58',
      lic: '1,164.58',
      equiv_publicas: '520.26',
      equiv_privadas: '1,120.56',
    }
  }


  openLink(){
    this.iab.create("https://admision.uan.mx/preinscripcion/","_system");
  }

}
