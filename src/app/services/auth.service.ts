import { Injectable, inject } from '@angular/core';
// import {
//   createUserWithEmailAndPassword,
//   Auth,
//   UserCredential,
//   signInWithEmailAndPassword,
//   signOut,
//   authState,
//   User} from '@angular/fire/auth';
import { map } from 'rxjs';
// import { Usuario } from '../models/usuario.model';
// import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // constructor(private auth: Auth, private firestore: Firestore) {
  // }

  initAuthListener() {
    // return authState(this.auth).subscribe((user: User|null)=>{
    //   console.log(user)
    // })
  }

  // crearUsuario(nombre:string, email:string, password:string): Promise<void|UserCredential> {

  // return createUserWithEmailAndPassword(this.auth, email, password)
  // .then(({user}) => {
  //   const newUser = new Usuario(user.uid, nombre, email);
  //   return setDoc(doc(this.firestore, `${user.uid}/usuario`), {...newUser});
  // });
  // }

  // loginUsuario(email:string, password:string): Promise<UserCredential> {
  // return signInWithEmailAndPassword(this.auth, email, password)
  // }

  // logoutUsuario(): Promise<void> {
  // return signOut(this.auth);
  // }

  isAuth() {
    // return authState(this.auth).pipe(
    //   map( user => user != null )
    // )
  }
}
