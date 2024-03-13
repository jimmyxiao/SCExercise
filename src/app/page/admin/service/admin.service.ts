import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  //* --- Parameters
  adminInfo = new BehaviorSubject<any>(null);
  //* --- Constructors
  constructor(private httpClient: HttpClient) {}

  //* --- Write down your CRUD Functions here.
  createAdmin(adminInfo: any): Observable<any> {
    return this.httpClient.post<any>("admin/createAdmin", adminInfo);
  }

  getAllAdmins(): Observable<any> {
    return this.httpClient.get<any>("admin/getAdminInfoList", {});
  }

  getAdminById(adminId: Number): Observable<any> {
    return this.httpClient.get<any>("admin/${adminId}");
  }

  updateAdminById(adminId: Number): Observable<any> {
    return this.httpClient.put<any>("admin/:{admin.id}", adminId);
  }

  deleteAdminById(adminId: Number): Observable<any> {
    return this.httpClient.delete<any>("deleteAdminById/${adminId}");
  }
}
