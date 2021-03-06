import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paginas } from '../../providers/paginas/paginas';

/**
 * Generated class for the MainPortadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-portada',
  templateUrl: 'main-portada.html',
})
export class MainPortadaPage {

  pagina: string ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openPageItem(paginaItem) {
    (new Paginas).push(paginaItem, this.navCtrl);

}



}
