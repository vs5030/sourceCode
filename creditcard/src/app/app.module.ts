import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'



@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective, 
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
