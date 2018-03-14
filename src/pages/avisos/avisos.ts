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
  }


  ionViewWillEnter(){
    this.consulta()
      }

    consulta(){
        this.service.avisos().then(data =>
          this.avisos = data)
      }
      
      doRefresh(refresher) {
        this.service.avisos().then(data =>
          this.avisos = data)
          refresher.complete();
      }
    
  


}
