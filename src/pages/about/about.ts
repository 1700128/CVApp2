import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  listQualities: AngularFireList<any>;
  newQuality= '';

  constructor(public navCtrl: NavController, public firebaseProvider:FirebaseProvider) {
    this.listQualities = this.firebaseProvider.getNewQuality();

  }
  addQuality(){
    this.firebaseProvider.addQuality(this.newQuality);
  }
removeQuality(id){
  this.firebaseProvider.removeQuality(id);
}
}
