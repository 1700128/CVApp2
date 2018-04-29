import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

// adding a list to my app, that is for adding new qualities and achievements
@Injectable()
export class FirebaseProvider {

  constructor(public afp: AngularFireDatabase) {  }

  getNewQuality()  {
    return this.afp.list('/newQuality/');
  }
  addQuality(name) {
    this.afp.list('/newQuality/').push(name);
  }
  removeQuality(id) {
    this.afp.list('/newQuality/').remove(id);
  }

}
