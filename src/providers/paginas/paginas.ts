import { Injectable } from '@angular/core';

import { MainPortadaPage } from '../../pages/main-portada/main-portada';
import { BienvenidaPage } from '../../pages/bienvenida/bienvenida';
import { AcercaDePage } from '../../pages/acerca-de/acerca-de';
import { AvisosPage } from '../../pages/avisos/avisos';
import { ContactoPage } from '../../pages/contacto/contacto';
import { EventosPage } from '../../pages/eventos/eventos';
import { LoginPage } from '../../pages/login/login';
import { MainMenuPage } from '../../pages/main-menu/main-menu';
import { RequisitosPage } from '../../pages/requisitos/requisitos';
import { ResultadosPage } from '../../pages/resultados/resultados';
import { RequisitosLicenciaturaPage } from '../../pages/requisitos/requisitos-licenciatura/requisitos-licenciatura';
import { RequisitosPreparatoriaPage } from '../../pages/requisitos/requisitos-preparatoria/requisitos-preparatoria';
import { ResultadosLicenciaturaPage } from '../../pages/resultados/resultados-licenciatura/resultados-licenciatura';
import { ResultadosLicenciaturaListadoPage } from '../../pages/resultados/resultados-licenciatura-listado/resultados-licenciatura-listado';
import { ResultadosLicenciaturaDetallePage } from '../../pages/resultados/resultados-licenciatura-detalle/resultados-licenciatura-detalle';
import { ResultadosPreparatoriaPage } from '../../pages/resultados/resultados-preparatoria/resultados-preparatoria';
import { ResultadosPreparatoriaListadoPage } from '../../pages/resultados/resultados-preparatoria-listado/resultados-preparatoria-listado';


export let paginas = [
    {
      name: 'portada',
      title: 'Portada',
      icon: 'md-school',
      component: MainPortadaPage
    },
    {
      name: 'bienvenida',
      title: 'Bienvenida',
      icon: 'md-school',
      component: BienvenidaPage,
     /* hide: false,
      isModal: false*/
    },
    {
      name: 'acerca_de',
      title: 'Acerca de',
      iconPng: 'md-information-circle',
      component: AcercaDePage
    },
    {
      name: 'avisos',
      title: 'Avisos',
      iconPng: 'ios-paper',
      component: AvisosPage
    },
    {
      name: 'contacto',
      title: 'Contacto',
      iconPng: 'ficon ficon-noticias',
      component: ContactoPage
    },
    {
      name: 'requisitos',
      title: 'Requisitos',
      icon: 'md-checkbox-outline',
      component: RequisitosPage
    },
    {
      name: 'resultados',
      title: 'Resultados',
      icon: 'ios-ribbon',
      component: ResultadosPage,
     // hide: true
    },
    {
      name: 'login',
      title: 'Login',
      icon: '',
      component: LoginPage,
      //hide: true
    },
    {
      name: 'eventos',
      title: 'Eventos',
      icon: '',
      component: EventosPage,
      //hide: true
    },
    {
      name: 'req_lic',
      title: 'Requisitos de Licenciatura',
      icon: '',
      component: RequisitosLicenciaturaPage,
      //hide: true
    },
    {
      name: 'req_pre',
      title: 'Requisitos de Preparatoria',
      icon: '',
      component: RequisitosPreparatoriaPage,
      //hide: true
    },
    {
      name: 'res_lic',
      title: 'Resultados Licenciatura',
      icon: '',
      component: ResultadosLicenciaturaPage,
      //hide: true
    },
    {
      name: 'res_lic_lis',
      title: 'Resultados Licenciatura Listado',
      icon: '',
      component: ResultadosLicenciaturaListadoPage,
      //hide: true
    },
    {
      name: 'req_pre',
      title: 'Resultados Licenciatura Detalle',
      icon: '',
      component: ResultadosLicenciaturaDetallePage,
      //hide: true
    },
    {
      name: 'res_pre',
      title: 'Resultados Preparatoria',
      icon: '',
      component: ResultadosPreparatoriaPage,
      //hide: true
    },
    {
      name: 'res_pre',
      title: 'Resultados Preparatoria Listado',
      icon: '',
      component: ResultadosPreparatoriaListadoPage,
      //hide: true
    },
    
  ];

export function componentsArray() {
  let pags = [];

  for (let page of paginas) {
    pags.push(page.component);
  }

  return pags;
}


@Injectable()
export class Paginas {

  public paginas: any;

  constructor() {
    this.paginas = paginas;
  }

  getPaginas() {
    return this.paginas;
  }

  componentsArray() {
    let pags = [];

    for (let page of this.paginas) {
      pags.push(page.component);
    }

    return pags;
  }

  push(paginaItem: String, navCtrl: any) {
    let newPage = this.find(paginaItem);

    if (! newPage) {
      return;
    }

    navCtrl.push(newPage);
  }

  find(item: String) {
    let pageComponent;
    for (let page of this.paginas) {
      if (page.name == item) {
        pageComponent = page.component;
        break;
      }
    }

    return pageComponent;
  }

}
