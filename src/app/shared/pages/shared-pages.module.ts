import {NgModule} from '@angular/core';
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SharedComponentsModule} from "../components/shared-components.module";

@NgModule({
  imports: [
    RouterModule,
    MatToolbarModule,
    SharedComponentsModule,
  ],
  declarations: [
    MainComponent]
})

export class SharedPagesModule {

}
