import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
/**
* Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage {
    usuario: String;
    clave: String;
    cliente: String;
    conductor: String;
    constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    }

    ionViewDidLoad() {
        if(window.localStorage["token"]){
            this.navCtrl.setRoot(HomePage);
        }
    }

    iniciarSesion() {

        var data = { 'username': this.usuario, 'password': this.clave };
        this.restProvider.login(data)
            .then((data: any) => {
                window.localStorage['token'] = data.key;
                this.navCtrl.setRoot(HomePage);
            });
    }

    pedirServicio() {

        var data = { 'cliente': this.cliente, 'conductor': this.conductor };
        this.restProvider.login(data)
            .then((data: any) => {
                window.localStorage['token'] = data.key;
                this.navCtrl.setRoot(HomePage);
            });
    }

    mostrarRegistro(){
        this.navCtrl.push(RegistroPage);

    }
}

