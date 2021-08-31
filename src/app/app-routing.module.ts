import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {PolicyComponent} from "./policy/policy.component";
import {PrivacyComponent} from "./privacy/privacy.component";

const routes: Routes = [
  { path: 'policy', component: PolicyComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'index', component: IndexComponent},
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
