import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberEditComponent } from './member-edit/member-edit.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
      { path: '', component: MemberComponent },
      { path: 'member-edit/:memberId', component: MemberEditComponent },
  ])],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
