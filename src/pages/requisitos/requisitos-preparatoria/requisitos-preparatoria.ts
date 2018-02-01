import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the RequisitosPreparatoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requisitos-preparatoria',
  templateUrl: 'requisitos-preparatoria.html',
})
export class RequisitosPreparatoriaPage {

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
