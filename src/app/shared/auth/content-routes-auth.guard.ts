import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from "@angular/router";
import { Observable, of } from "rxjs";
import { NotificationService } from "../services/notification.service";
import { UserService } from "../services/user.service";

@Injectable({
    providedIn: "root",
})
export class ContentRoutesAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService,
        private notificationService: NotificationService) {
        }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {

        let url = state.url;
        console.log('window.sessionStorage.getItem("User")',window.sessionStorage.getItem("User"));
        console.log('window.sessionStorage.getItem("UserToken")',window.sessionStorage.getItem("UserToken"));

        if(window.sessionStorage.getItem("User")==null || window.sessionStorage.getItem("UserToken")==null){
            console.log('user ==null');
            this.router.navigate(["/auth/login"]);
            return of(false);
        }

        const currentUser = JSON.parse(
            window.sessionStorage.getItem("User")!
        );

        console.log('currentUser',currentUser);

        //取得登入者資料
        // 1.管理員權限 : 所有功能
        if (currentUser=== null) {

            this.userService.url = url;
            this.userService.urlRoute = route;
            this.router.navigate(["/auth/login"]);
            return of(false);
        }else  {
            //console.log('currentUser',currentUser?.roles[0]?.authority);
            
            return true;
        }

        //TODO 權限控管待處理
        // 2.小幫手 : 權限控管待處理
        // 帳號管理無法使用
        // else if (currentUser.roles[0].authority == 'ROLE_HELPER') {
        //     if (
        //         route.routeConfig?.path?.includes("purview") 
        //     ) {
        //         this.notificationService.showError("您權限不足", "");
        //         return false;
        //     }else{
        //         return true;
        //     }
        // }
        // else {
        //     return false;
        // }
    }
}
