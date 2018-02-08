import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { Paginas } from '../../../providers/paginas/paginas';
import { ResultadosLicenciaturaPage  } from '../../../pages/resultados/resultados-licenciatura/resultados-licenciatura';
import { ResultadosPreparatoriaPage  } from '../../../pages/resultados/resultados-preparatoria/resultados-preparatoria';


@IonicPage()
@Component({
  selector: 'page-listas-de-resultados',
  templateUrl: 'listas-de-resultados.html',
})
export class ListasDeResultadosPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  openPageLic() {
  this.app.getRootNav().push(ResultadosLicenciaturaPage);

}
  openPagePre() {
    this.app.getRootNav().push(ResultadosPreparatoriaPage);

}


}
