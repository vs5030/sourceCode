import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CreateCharacterComponent } from "./create-character.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
     CreateCharacterComponent
    ],
  
    imports: [
      CommonModule,  
      FormsModule,
      RouterModule.forChild([
        {path:'', component: CreateCharacterComponent}
      ])
    ]
  })
  export class CreateCharacterModule { }
  