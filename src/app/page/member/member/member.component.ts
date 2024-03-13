import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { MemberService } from '../service/member.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  //查詢結果列表
  userInfoList$ = new BehaviorSubject<any[]>([]);

  cols?: any[]; //不確定是否可省略,前端p-table 用
  conditionForm: UntypedFormGroup = new UntypedFormGroup({});
  constructor(
    private memberService: MemberService,
    private router: Router,
    private http: HttpClient,
  ) {
    //麵包屑 Breadcrumb

  }

  ngOnInit(): void {
    this.conditionForm = new UntypedFormGroup({
      account: new UntypedFormControl(null),
      name: new UntypedFormControl(null),
      phoneNo: new UntypedFormControl(null),
      email: new UntypedFormControl(null),
    });
    this.getMemberList();
  }

  openNewMember() {
    this.router.navigate(["member/member-edit/new"]);
  }

  openNewTeam() {
    this.router.navigate(["member/edit-team/new"]);
  }

  getTeamList() {
    this.http.get<any[]>("member/getTeamList", {}).subscribe(resp => {
      this.userInfoList$.next(resp);
    });
  }

  editMember(memberId: number) {

  }

  getMemberList() {
    this.http.get<any[]>("member/getUserInfoList", {}).subscribe(resp => {
      this.userInfoList$.next(resp);
    });
  }



}