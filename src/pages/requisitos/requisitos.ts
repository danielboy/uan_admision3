import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paginas } from '../../providers/paginas/paginas';


@IonicPage()
@Component({
  selector: 'page-requisitos',
  templateUrl: 'requisitos.html',
})
export class RequisitosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPageItem(paginaItem) {
    (new Paginas).push(paginaItem, this.navCtrl);

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequisitosPage');
  }

}
