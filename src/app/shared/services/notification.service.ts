import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  /**
   * 成功
   * @param message 內文
   * @param title  標題
   */
  showSuccess(message: string, title: string) {
    this.messageService.add({
      severity: 'success',
      summary: title,
      detail: message
    });
  }

  /**
   * 錯誤
   * @param message 內文
   * @param title  標題
   */
  showError(message: string, title: string) {
    console.log('showError',message + title);
    this.messageService.add({
      severity: 'error',
      summary: title,
      detail: message
    });
  }

  /**
   * 資訊
   * @param message 內文
   * @param title  標題
   */
  showInfo(message: any, title: any) {
    this.messageService.add({
      severity: 'info',
      summary: title,
      detail: message
    });
  }

  /**
   * 警告
   * @param message 內文
   * @param title  標題
   */
  showWarning(message: any, title: any) {
    this.messageService.add({
      severity: 'warning',
      summary: title,
      detail: message
    });
  }

}