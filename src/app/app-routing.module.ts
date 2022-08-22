import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SharedPagesModule} from "./shared/pages/shared-pages.module";
import {MiembrosService} from "./shared/services/miembros-service";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ibm-admin',
    pathMatch: 'full',
  },
  // {
  //   path: 'auth',
  //   component: UnauthenticatedPageComponent
  // },
  {
    path: 'ibm-admin',
    loadChildren: () => import('./shared/pages/main/main-nav.routing.module').then((m) => m.MainNavRouting)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedPagesModule, HttpClientModule],
  exports: [RouterModule],
  providers: [MiembrosService ]
})
export class AppRoutingModule { }
