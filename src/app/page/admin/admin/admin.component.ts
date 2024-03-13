import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AdminService } from "../service/admin.service";
import { Router } from "@angular/router";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  //* --- Parameters
  adminInfo = new BehaviorSubject<any[]>([]);
  conditionForm: UntypedFormGroup = new UntypedFormGroup({});

  //* --- Constructors
  constructor(private adminService: AdminService, private router: Router) {}

  //* --- Initialize
  ngOnInit(): void {
    this.conditionForm = new UntypedFormGroup({
      account: new UntypedFormControl(null),
      name: new UntypedFormControl(null),
      phoneNo: new UntypedFormControl(null),
      email: new UntypedFormControl(null),
    });
    this.getAllAdmins();
  }

  //* --- Functions
  createAdmin() {}

  getAllAdmins() {
    this.adminService.getAllAdmins().subscribe((resp) => {
      if (resp.result == true) {
        this.adminInfo.next(resp);
      } else {
        console.log(resp);
      }
    });
  }

  getAdminById() {}

  updateAdminById() {}

  deleteAdminById() {}
}
