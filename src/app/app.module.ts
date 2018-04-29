import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: "AIzaSyBjlQ_fx_QC8-8qh_R8AiRWIkoDxJE4hOA",
  authDomain: "cvapp2-7eb2d.firebaseapp.com",
  databaseURL: "https://cvapp2-7eb2d.firebaseio.com",
  projectId: "cvapp2-7eb2d",
  storageBucket: "",
  messagingSenderId: "31001305477"

};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseProvider
  ]
})
export class AppModule {}
