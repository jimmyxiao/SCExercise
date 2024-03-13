import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';
@Injectable({
  providedIn: 'root'
})
export class RSAHelperService {

    privateKey!: string;

    constructor(
      private httpClient: HttpClient
    ) {
      this.readFile();
    }

    /**
     *
     * @param valueToEncrypt 內文
     * @returns 加密文
     */
    encryptWithPrivateKey(valueToEncrypt: string): string {
      /*
      const rsa = Forge.pki.publicKeyFromPem(this.privateKey)
      return window.btoa(rsa.encrypt(valueToEncrypt));
      */
      return valueToEncrypt;
    }

    /**
     * 取得公鑰
     */
    readFile() {
      this.httpClient.get('assets/keys/rsa_public_key.pem', { responseType: 'text' })
        .subscribe(data => {
          this.privateKey = data
        });
    }

  }
