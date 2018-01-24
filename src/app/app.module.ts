import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainPortadaPage } from '../pages/main-portada/main-portada';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { AvisosPage } from '../pages/avisos/avisos';
import { ContactoPage } from '../pages/contacto/contacto';
import { EventosPage } from '../pages/eventos/eventos';
import { LoginPage } from '../pages/login/login';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { RequisitosPage } from '../pages/requisitos/requisitos';
import { ResultadosPage } from '../pages/resultados/resultados';
import { MiPuntajePage } from '../pages/mi-puntaje/mi-puntaje';
import { ListasDeResultadosPage } from '../pages/listas-de-resultados/listas-de-resultados';
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
    //ListasDeResultadosPage,
   // MiPuntajePage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
   // ListasDeResultadosPage,
   // MiPuntajePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Paginas,
  ]
})
export class AppModule {}
