import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import firebase from 'firebase';

// This is all for helping me do Login/Logout process.
@Injectable()
export class AuthProvider {

  constructor() {  }

  //this makes email and pass to sign in to app
  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  //this is to create user to database and signin to app
  signupUser(email: string, password: string, name: string, username:string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser)=>{
      firebase.database().ref('/userProfile').child(newUser.uid).set({
        email:email
      }); 
       
      });
    }
      //reset password

      resetPassword(email: string): Promise<any> {
        return  firebase.auth().sendPasswordResetEmail(email);
      }

      //finally logout
      logoutUser(): Promise<any> {
        return firebase.auth().signOut();
      }
      
    
  }


