import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MessagesModule,
        MessagesModule,
    ],
    exports:[
        MessagesModule,
        MessagesModule
    ]
})
export class AuthModule { }
