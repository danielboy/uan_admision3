import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service'




@IonicPage()
@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
  providers: [ServiceProvider]
})
export class AvisosPage {

  avisos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {

 /*   this.avisos = [{titulo: "Nine Inch Nails Live", extracto:" The most popular industrial group ever, and largely"},
                   {titulo: "Nine Inch Nails Live", extracto:" The most popular industrial group ever, and largely"}

    ]*/
  }

 doRefresh(refresher) {
    console.log('Begin async operation', refresher);
  }

ionViewDidLoad(){
    this.service.avisos().then(data =>
      this.avisos = data
  )}
  

}
