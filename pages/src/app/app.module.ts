import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CstmNgClassDirective } from './cstm-ng-class.directive';
import { CstmNgForDirective } from './cstm-ng-for.directive';

@NgModule({
  declarations: [
    AppComponent,
    CstmNgClassDirective,
    CstmNgForDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
