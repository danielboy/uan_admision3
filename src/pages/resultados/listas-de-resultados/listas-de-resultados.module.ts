import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListasDeResultadosPage } from './listas-de-resultados';

@NgModule({
  declarations: [
    ListasDeResultadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListasDeResultadosPage),
  ],
})
export class ListasDeResultadosPageModule {}
