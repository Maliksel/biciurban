import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  selector: 'page-rutas',
  templateUrl: 'rutas.html',

})
export class RutasPage {

  ruta: any;
  usuarios: any;
  cliente: String; 
  conductor: String; 
  

  


  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.consultarRuta();
    this.consultarUsuarios();
  }

  consultarRuta() {
    this.restProvider.getRuta()
      .then(data => {
        this.ruta = data;

      });
  }

  consultarUsuarios() {
    this.restProvider.getBiciusuario()
      .then(data => {
        this.usuarios = data;
      });


  }

  pedirServicio() {
    
    const alert = this.alertCtrl.create({
      title: 'Servicio corfimado',
      subTitle: 'Su servicio ha sido solicitado exitosamente, en unos minutos estara en su destino',
      buttons: ['OK']
    });
    alert.present();
  
    var data = {
      'usuario': this.usuarios,
      'ruta': this.ruta,
      'cliente': this.cliente,
      'conductor': this.conductor
         };
      this.restProvider.servicio(data).then((result:any) => {
        var data = { 'cliente': this.cliente, 'conductor': this.conductor };
        this.restProvider.login(data).then((data: any) => {
            window.localStorage['token'] = data.key;
            this.navCtrl.setRoot(HomePage);
        });
      }, (err) => {
      console.log(err);
      });

     


    }


  

}
