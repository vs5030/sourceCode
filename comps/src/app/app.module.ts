import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ElementsModule } from './elements/elements.module';
//import { ViewsModule } from './views/views.module';
//import { CollectionsModule } from './collections/collections.module';
import { ModsModule } from './mods/mods.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
//    ElementsModule,
//    ViewsModule,
//    CollectionsModule,
//    ModsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
