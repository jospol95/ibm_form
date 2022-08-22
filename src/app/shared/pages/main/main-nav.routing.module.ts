import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main.component';
import {SharedPagesModule} from '../shared-pages.module';
import {HttpClientModule} from "@angular/common/http";
import {FormPageComponent} from "../../../modulos/form/pages/form-page/form-page.component";
import {FormModule} from "../../../modulos/form/form.module";


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FormPageComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormModule,
    HttpClientModule,
    SharedPagesModule],
  exports: [RouterModule],
  providers: []
})
export class MainNavRouting { }
