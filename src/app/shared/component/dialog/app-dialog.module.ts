import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DialogComponent } from './dialog.component'
import { ButtonModule } from 'primeng/button';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule
  ],
  declarations: [
    DialogComponent,
  ],
  exports: [
    DialogComponent,
  ],
})
export class AppDialogModule { }
