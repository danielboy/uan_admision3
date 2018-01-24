import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { OtherPage } from './bienvenida;

/**
 * Generated class for the BienvenidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class BienvenidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaPage');
  }

}
