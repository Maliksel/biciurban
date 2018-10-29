import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  rutas(data: { 'usuario': any; }): any {
    throw new Error("Method not implemented.");
  }

  apiUrl = 'http://0b08e0c2.ngrok.io/'
  loginService = 'api/login/';
  apiRuta = 'rutas/';
  apiUsuarios = 'usuarios/';
  apiPerfil = 'perfiles/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  login(data) {

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.loginService, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  registro(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apiUsuarios, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  
  servicio(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apiUsuarios, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }



  getRuta() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiRuta, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPerfil() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiPerfil).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getBiciusuario() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiUsuarios, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
