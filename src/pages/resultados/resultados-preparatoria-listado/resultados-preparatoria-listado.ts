import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultadosPreparatoriaListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados-preparatoria-listado',
  templateUrl: 'resultados-preparatoria-listado.html',
})
export class ResultadosPreparatoriaListadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
  }
}
