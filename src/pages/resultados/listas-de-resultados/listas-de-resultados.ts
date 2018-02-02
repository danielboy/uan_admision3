import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paginas } from '../../../providers/paginas/paginas';


@IonicPage()
@Component({
  selector: 'page-listas-de-resultados',
  templateUrl: 'listas-de-resultados.html',
})
export class ListasDeResultadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPageItem(paginaItem) {
    (new Paginas).push(paginaItem, this.navCtrl);
}

}
