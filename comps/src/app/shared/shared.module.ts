import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { ModsModule } from '../mods/mods.module';



@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DividerComponent
  ]
})
export class SharedModule { }
