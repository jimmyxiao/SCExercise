import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member/member.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { MemberEditComponent } from './member-edit/member-edit.component';


@NgModule({
  declarations: [
    MemberComponent,
    MemberEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
