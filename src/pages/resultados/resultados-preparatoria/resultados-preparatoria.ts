import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-resultados-preparatoria',
  templateUrl: 'resultados-preparatoria.html',
})
export class ResultadosPreparatoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
  }

  ionViewDidEnter() {
    let toast = this.toastCtrl.create({
      message: 'No Hay Resultados',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
