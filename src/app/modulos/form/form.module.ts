import {NgModule} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {FormsModule} from "@angular/forms";
import {FormPageComponent} from "./pages/form-page/form-page.component";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    FlexModule,
    MatButtonModule,
    SharedComponentsModule,
    FormsModule,
    SweetAlert2Module,
    CommonModule,
    // FlexLayoutModule
  ],
  declarations: [FormPageComponent],
})

export class FormModule{

}
