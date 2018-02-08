import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { MainPortadaPage } from '../pages/main-portada/main-portada';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { AvisosPage } from '../pages/avisos/avisos';
import { ContactoPage } from '../pages/contacto/contacto';
import { EventosPage } from '../pages/eventos/eventos';
import { LoginPage } from '../pages/login/login';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { RequisitosLicenciaturaPage } from '../pages/requisitos/requisitos-licenciatura/requisitos-licenciatura';
import { RequisitosPreparatoriaPage } from '../pages/requisitos/requisitos-preparatoria/requisitos-preparatoria';
import { RequisitosPage } from '../pages/requisitos/requisitos';
import { ResultadosPage } from '../pages/resultados/resultados';
//import { MiPuntajePage } from '../pages/resultados/mi-puntaje/mi-puntaje';
//import { ListasDeResultadosPage } from '../pages/resultados/listas-de-resultados/listas-de-resultados';
import { ResultadosLicenciaturaPage } from '../pages/resultados/resultados-licenciatura/resultados-licenciatura';
import { ResultadosLicenciaturaListadoPage } from '../pages/resultados/resultados-licenciatura-listado/resultados-licenciatura-listado';
import { ResultadosLicenciaturaDetallePage } from '../pages/resultados/resultados-licenciatura-detalle/resultados-licenciatura-detalle';
import { ResultadosPreparatoriaPage } from '../pages/resultados/resultados-preparatoria/resultados-preparatoria';
import { ResultadosPreparatoriaListadoPage } from '../pages/resultados/resultados-preparatoria-listado/resultados-preparatoria-listado';


import { Paginas } from '../providers/paginas/paginas';



@NgModule({
  declarations: [
    MyApp,
    MainPortadaPage,
    BienvenidaPage,
    AcercaDePage,
    AvisosPage,
    ContactoPage,
    EventosPage,
    LoginPage,
    MainMenuPage,
    RequisitosPage,
    ResultadosPage,
    RequisitosLicenciaturaPage,
    RequisitosPreparatoriaPage,
    ResultadosLicenciaturaPage,
    ResultadosLicenciaturaListadoPage,
    ResultadosLicenciaturaDetallePage,
    ResultadosPreparatoriaPage,
    ResultadosPreparatoriaListadoPage

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      {

        mode: "md",
      })
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPortadaPage,
    BienvenidaPage,
    AcercaDePage,
    AvisosPage,
    ContactoPage,
    EventosPage,
    LoginPage,
    MainMenuPage,
    RequisitosPage,
    ResultadosPage,
    RequisitosLicenciaturaPage,
    RequisitosPreparatoriaPage,
    ResultadosLicenciaturaPage,
    ResultadosLicenciaturaListadoPage,
    ResultadosLicenciaturaDetallePage,
    ResultadosPreparatoriaPage,
    ResultadosPreparatoriaListadoPage
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Paginas,
  ]
  
})
export class AppModule {}
