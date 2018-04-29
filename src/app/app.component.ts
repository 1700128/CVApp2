import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import firebase from 'firebase';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = WelcomePage;
  public zone:NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    this.zone =  new NgZone({});
    const config = {
      apiKey: "AIzaSyBjlQ_fx_QC8-8qh_R8AiRWIkoDxJE4hOA",
    authDomain: "cvapp2-7eb2d.firebaseapp.com",
    databaseURL: "https://cvapp2-7eb2d.firebaseio.com",
    projectId: "cvapp2-7eb2d",
    storageBucket: "",
    messagingSenderId: "31001305477"
};
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged( user => {
    this.zone.run( () => {
      if (!user) {
        this.rootPage ='LoginPage';
      } else {
        this.rootPage = TabsPage;
      }
    });
  });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
