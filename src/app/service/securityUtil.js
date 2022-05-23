import CryptoJS from 'crypto-js';
import AesUtil from './aesUtil';
import JSEncrypt from 'node-jsencrypt';
const iterationCount = 1000;
const keySize = 128;

class SecurityUtil {
    constructor(rsaPubKey) {
        this._aesUtil = new AesUtil(keySize, iterationCount);
        this.rsaPublicKey = rsaPubKey;
        this._passPhrase = this._aesUtil.generateRandomHex();
        this._iv = this._aesUtil.generateRandomHex();
        this._salt = this._aesUtil.generateRandomHex();
    }

    encryptRSA = (data) => {
      const crypt = new JSEncrypt(); 
      crypt.setPublicKey(this.rsaPublicKey);
      return crypt.encrypt(data); 
    }  

    getAES256EncryptedData = (data) => {
        const ciphertext = this._aesUtil.encrypt(this._salt, this._iv, this._passPhrase, data); 

        const lPassPhrase = this.encryptRSA(this._passPhrase); 
        const lIv = this.encryptRSA(this._iv); 
        const lSalt = this.encryptRSA(this._salt);

        const utfPassPhrase = CryptoJS.enc.Utf8.parse(lPassPhrase); 
        const utfIv = CryptoJS.enc.Utf8.parse(lIv); 
        const utfSalt = CryptoJS.enc.Utf8.parse(lSalt); 

        // console.log('utfPassPhrase===>' + utfPassPhrase);
        // console.log('utfIv=====>'+ utfIv);
        // console.log('utfSalt=====>'+ utfSalt);

        
        const encryptRequest= {
          "request": ciphertext,
          "passcodeX": CryptoJS.enc.Base64.stringify(utfPassPhrase),
          "passcodeY": CryptoJS.enc.Base64.stringify(utfIv),
          "passcodeZ": CryptoJS.enc.Base64.stringify(utfSalt),
      } 
        
        return encryptRequest;
    }

    getAES256DecryptedData = (ciphertext) => {
        const plainText = this._aesUtil.decrypt(this._salt, this._iv, this._passPhrase, ciphertext);
        return plainText.toString();
    }
}

export default SecurityUtil;
