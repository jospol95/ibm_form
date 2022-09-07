import {NgModule} from "@angular/core";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";
import {
  ContactInfoTabComponent,
  MiembroInfoTabComponent,
  MiembrosFormComponent,
  PersonalInfoTabComponent
} from "./miembros-form";

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        MatIconModule,
        CommonModule,
        FlexModule,
        FlexLayoutModule,
        MatListModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatTabsModule,
    ],
  exports: [
    NavMenuComponent,
    MiembrosFormComponent
  ],
  declarations: [
    NavMenuComponent,
    MiembrosFormComponent,
    PersonalInfoTabComponent,
    MiembroInfoTabComponent,
    ContactInfoTabComponent,
  ]
})

export class SharedComponentsModule{

}
