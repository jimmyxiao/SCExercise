import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import jwt_decode from "jwt-decode";
import { NotificationService } from "src/app/shared/services/notification.service";
import { User } from "src/app/shared/models/User";
import { UserService } from "src/app/shared/services/user.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  public currentUser: any;

  constructor(private http: HttpClient, private userService: UserService) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem("User")!)
    );
    this.user = this.userSubject.asObservable();
  }

  login(data: any): Observable<any> {
    // 登入前一律移除現有 token
    this.userService.cleanSessionStorage();
    return this.http.post("auth/login", data).pipe(
      tap((baseModel: any) => {
        console.log(baseModel);
        if (baseModel.result != null && baseModel.result) {
          let userdata: User = new User();
          const token: any = baseModel.data.token;
          const decodedJWT: any = jwt_decode(baseModel.data.token);
          userdata.adminInfo = decodedJWT;
          userdata.token = token;
          userdata.userName = baseModel.data.account;
          this.userSubject.next(userdata);

          //   sessionStorage.setItem("User", JSON.stringify(userdata));

          console.log("user", userdata);
        }
        return data;
      })
    );
  }

  forgetPassword(data: any): Observable<unknown> {
    return this.http.post("auth/forgetPw", data);
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  sendEMailVerificationCode(data: any): Observable<unknown> {
    return this.http.post("auth/sendEMailVerificationCode", data);
  }

  /**
   *  修改密碼 忘記密碼
   * @param jwt JWT
   * @param newPw 新密碼
   * @param newPwConfirm 確認密碼
   * @returns
   */
  editPwFromPwRecovery(
    jwt: String,
    newPw: String,
    newPwConfirm: String
  ): Observable<unknown> {
    const body = { jwt: jwt, newPw: newPw, newPwConfirm: newPwConfirm };
    return this.http.put("authority/editPwFromPwRecovery", body);
  }
}
