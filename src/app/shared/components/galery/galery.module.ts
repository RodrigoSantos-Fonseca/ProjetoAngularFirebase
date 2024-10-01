import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GaleryComponent } from './galery.component';



@NgModule({
  declarations: [
    GaleryComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[
    GaleryComponent
  ]

})
export class GaleryModule { }
