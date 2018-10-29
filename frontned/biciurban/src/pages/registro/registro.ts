import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  nombre: String; 
  apellido: String; 
  fecha_de_nacimiento: Date;
  correo: String; ;
  perfil: Number;
  usuario: String;
  clave: String;
  perfiles: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    this.consultarPerfiles();
  }

  iniciarRegistro() {
    var data = {
    'nombre': this.nombre,
    'apellido': this.apellido,
    'fecha_nacimiento': this.fecha_de_nacimiento,
    'correo': this.correo,
    'perfil': this.perfil,
    'username': this.usuario,
    'password': this.clave
    
    };
    this.restProvider.registro(data).then((result:any) => {
      var data = { 'username': this.usuario, 'password': this.clave };
      this.restProvider.login(data).then((data: any) => {
        // preguntar
          window.localStorage['token'] = data.key;
          this.navCtrl.setRoot(HomePage);
      });
    }, (err) => {
    console.log(err);
    });
    }
   

    consultarPerfiles() {
      this.restProvider.getPerfil()
      .then(data => {
      this.perfiles = data;
      });


}
}
