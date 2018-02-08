import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-avisos',
  templateUrl: 'avisos.html',
})
export class AvisosPage {

  avisos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.avisos = [{titulo: "Nine Inch Nails Live", extracto:" The most popular industrial group ever, and largely"},
                   {titulo: "Nine Inch Nails Live", extracto:" The most popular industrial group ever, and largely"}

    ]
  }

}
