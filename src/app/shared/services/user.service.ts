import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";
import { User } from "../models/User";
import { UserProfile } from "../models/UserProfile";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly tokenKey: string = "UserToken";
  private user = new User();
  user$ = new ReplaySubject<User>(1);
  public userSubject: BehaviorSubject<User>;
  public url?: string;
  public urlRoute?: ActivatedRouteSnapshot;
  public unRead$ = new BehaviorSubject<any>("");
  public userName$ = new BehaviorSubject<any>("");

  constructor(private httpClient: HttpClient, private router: Router) {
    if (this.getUserToken()) {
      this.user$.next(this.getUserToken());
    }
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem("User")!)
    );
  }

  public get userValue(): User {
    return JSON.parse(sessionStorage.getItem("User")!);
  }

  setUserStorage(userProfile: UserProfile): void {
    this.user = { ...this.user, ...userProfile };
    console.log("setUserStorage this.user", this.user);
    sessionStorage.setItem(this.tokenKey, JSON.stringify(this.user.token));
    sessionStorage.setItem("User", JSON.stringify(this.user));
    this.user$.next(this.user);
  }

  getUserProfile(): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>("adminInfo/me");
  }

  getUserToken(): User {
    console.log("getUserToken run", sessionStorage.getItem(this.tokenKey));
    if (sessionStorage.getItem(this.tokenKey)) {
      return JSON.parse(sessionStorage.getItem(this.tokenKey)!);
    }
    return new User();
  }

  /**
   * @summary 登入時先清空
   */
  cleanSessionStorage() {
    sessionStorage.removeItem("User");
    sessionStorage.removeItem(this.tokenKey);
  }

  /**
   * @summary 登出
   */
  logout(): void {
    sessionStorage.removeItem("User");
    sessionStorage.removeItem(this.tokenKey);
    window.location.reload();
  }

  getUnreadMsg() {
    return this.httpClient
      .get<any>("admin/getUnreadMsg", {
        params: {},
      })
      .subscribe((resp) => {
        this.unRead$.next(resp.data.unreadMsgCount);
        this.userName$.next(resp.data.userName);
      });
  }
}
