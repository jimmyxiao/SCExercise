import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { MemberService } from "../service/member.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import { AdminService } from '../../admin/service/admin.service';

@Component({
  selector: "app-member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.scss"],
})
export class MemberEditComponent implements OnInit {
  memberEditForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private memberService: MemberService,
    // private adminService: AdminService,
    private router: Router,
    private http: HttpClient
  ) {
    //麵包屑 Breadcrumb
  }

  ngOnInit(): void {
    this.initForm();
  }

  roleItems = [
    { name: "管理員", role: 1 },
    { name: "一般", role: 2 },
  ];

  initForm() {
    this.memberEditForm = new UntypedFormGroup({
      adminId: new UntypedFormControl(null),
      userId: new UntypedFormControl(null),
      account: new UntypedFormControl(null),
      password: new UntypedFormControl(null),
      userName: new UntypedFormControl(null),
      role: new UntypedFormControl(null),
      birthday: new UntypedFormControl(null),
      sex: new UntypedFormControl(null),
      phoneNo: new UntypedFormControl(null),
      verifyCode: new UntypedFormControl(null),
      verifyTime: new UntypedFormControl(null),
      phoneVerified: new UntypedFormControl(null),
      email: new UntypedFormControl(null),
      emailVerified: new UntypedFormControl(null),
      loginThirdPartyId: new UntypedFormControl(null),
      loginType: new UntypedFormControl(null),
      userPicFileId: new UntypedFormControl(null),
      statesCode: new UntypedFormControl(null),
      creationDate: new UntypedFormControl(null),
      updateDate: new UntypedFormControl(null),
    });
  }

  saveMember() {
    this.http
      .post<any>("member/saveMember", this.memberEditForm.getRawValue())
      .subscribe((resp) => {});
  }
}
