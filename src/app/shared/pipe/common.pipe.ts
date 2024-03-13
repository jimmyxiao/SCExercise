import {Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";


@Pipe({ name: "signUpType" })
export class signUpType implements PipeTransform {
    transform(value: any): string {
        if (value === 1) {
            return "普通帳號";
        } else if (value === 2) {
            return "Google帳號";
        }else if (value === 3) {
            return "Facebook帳號";
        }
        else {
            return "帳號異常";
        }
    }
}



@Pipe({
    name: "html"
})
export class HtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}
