import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from '../service/login.service';
import { UserService } from 'src/app/shared/services/user.service';
import { RSAHelperService } from 'src/app/shared/services/rsahelper.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AppComponent } from 'src/app/app.component';
import { NgxSpinnerService } from "ngx-spinner";
import { tap } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './login.component.html',
    providers: [MessageService]
})
export class LoginComponent {

	rememberMe: boolean = false;
	loginForm = new UntypedFormGroup({
        account: new UntypedFormControl(null),
        password: new UntypedFormControl(null),
    });

	loginFormSubmitted = false;

    constructor(
		public layoutService: LayoutService,
        private router: Router,
        private loginService: LoginService,
        private userService: UserService,
        private rSAHelperService: RSAHelperService,
        private notificationService: NotificationService,
        public app: AppComponent,
        private messageService: MessageService,
        private spinner: NgxSpinnerService
    ) {}

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

	onSubmit() {
     
  
        this.loginForm.patchValue({
            userPw: this.rSAHelperService.encryptWithPrivateKey(
                this.loginForm.value.pw
            ),
        });

        this.loginFormSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        console.log('this.loginForm.value:',this.loginForm.value);
        //this.spinner.show();

        //setTimeout(() => {
            //this.spinner.hide();

            this.loginService
                .login(this.loginForm.value)
                
                .subscribe((response) => {
                    console.log('response:',response);
                    if (response.result  != null && response.result ){
                        this.userService.setUserStorage(response.data);
                        //this.userService.setToken(response.data.token);
                        // this.notificationService.showSuccess("登入成功!", "");
                        this.messageService.add({severity: 'success',summary: '登入成功!', detail: ''});
                   
                        this.router.navigate(["/"]);
                    
                      
                    }else if(response.result  != null && response.code === '902'){
                        console.log('902:', response.code);
                        this.messageService.add({severity: 'error',summary: '登入失敗!', detail: '帳號密碼錯誤'});
                   
                        //this.notificationService.showError("帳號密碼錯誤!", "登入失敗!");  
                    }else if(response.result != null && response.code === '903'){
                        this.messageService.add({severity: 'error',summary: '登入失敗!', detail: '帳號未啟用'});
                        //this.notificationService.showError("帳號未啟用!", "登入失敗!");  
                    }else{
                        this.messageService.add({severity: 'error',summary: '登入失敗!', detail: ''});
                        //this.notificationService.showError("登入失敗!","");  
                    }
                });
        //}, 2000);
    }

}
