import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputAtomComponent } from '../../components/atoms/input-atom/input-atom.component';
import { LabelAtomComponent } from '../../components/atoms/label-atom/label-atom.component';
import { ButtonAtomComponent } from '../../components/atoms/button-atom/button-atom.component';
import { FormFieldMoleculeComponent } from '../../components/molecules/form-field-molecule/form-field-molecule.component';
import { FormCheckboxFieldMoleculeComponent } from '../../components/molecules/form-checkbox-field-molecule/form-checkbox-field-molecule.component';
import { LinkAtomComponent } from '../../components/atoms/link-atom/link-atom.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule, 
    ReactiveFormsModule, 
    NgIf, 
    CheckboxModule,
    PasswordModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    RippleModule,
    CardModule,
    InputAtomComponent,
    LabelAtomComponent,
    ButtonAtomComponent,
    FormFieldMoleculeComponent,
    FormCheckboxFieldMoleculeComponent,
    LinkAtomComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  valCheck: string[] = ['remember'];

  password!: string;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    })
  }

  ngOnInit(): void {

  }

  loginUser() {

    // Swal.fire({
    //   title: 'Plese wait',
    //   didOpen: () => {
    //     Swal.showLoading();
    //   }
    // });
    let a = 'a';
    let b = 'x';
    console.log({a,b});
    [a, b] = [b, a];
    console.log({a,b});
    const {email, password} = this.loginForm.value;
    // this.auth.loginUsuario(email, password).then( credentials => {
    //   console.log(credentials);
    //   // Swal.close();
      this.router.navigate(['dashboard']);
    // }).
    // catch(err => {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: err.message
      // });
    // })
  }
}
