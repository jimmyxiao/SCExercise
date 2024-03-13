import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({

    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        OverlayModule,
        ReactiveFormsModule,
        TableModule,
        ConfirmDialogModule,
        DropdownModule,
        FileUploadModule,
		InputTextModule,
		InputTextareaModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        OverlayModule,
        ReactiveFormsModule,
        TableModule,
        ConfirmDialogModule,
        DropdownModule,
        FileUploadModule,
        InputTextModule,
		InputTextareaModule,
    ],
    declarations: [
      
    ],
})
export class SharedModule {}
