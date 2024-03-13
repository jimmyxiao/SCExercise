import { Component } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private notificationService: NotificationService){}



  // ----------Notification---------------------

  showNotification(){
    this.notificationService.showSuccess("success","");
  }

  // ---------------dialog-----------------------

  dialogText!: string;
  dialogTitle!: string;
  dialogVisible: boolean = false;

  openDialog(){
    this.dialogText = '內容';
    this.dialogTitle = "標題";
    this.dialogVisible = true;
  }

  closeDialog(value: boolean){
    this.dialogVisible = value;
  }



}
