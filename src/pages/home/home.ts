import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App, public authProvider: AuthProvider) {

  }
  logout(){
   this.authProvider.logoutUser().then(() => {
     this.navCtrl.setRoot('LoginPage');
   }
  );
  }
}
