import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [];

@NgModule({
  
  imports: [RouterModule.forChild([
    { path: '', component: WelcomeComponent },
   
])],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
