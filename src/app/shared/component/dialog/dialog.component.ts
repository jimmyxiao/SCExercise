import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() text: string = ''; // 內容
  @Input() title: string = ''; // 標題
  @Input() visible: boolean = false; // 是否開啟 dialog
  @Output() status = new EventEmitter<boolean>(); // 回傳給父組件，為了讓父組件的visable回到false

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
    this.status.emit(false);
  }
}
