import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormFieldMoleculeComponent } from '../../components/molecules/form-field-molecule/form-field-molecule.component';
import { UserService } from '../../services/user.service';
import { User } from '../../auth/interfaces';
import { ButtonModule } from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import { LabelAtomComponent } from '../../components/atoms/label-atom/label-atom.component';
import { MessageService } from 'primeng/api';
import { SkeletonModule } from 'primeng/skeleton';


@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    FormFieldMoleculeComponent,
    ButtonModule,
    SelectButtonModule,
    LabelAtomComponent,
    ReactiveFormsModule,
    SkeletonModule
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnInit {

  userForm!: FormGroup;
  userService = inject(UserService);
  messageService = inject(MessageService);
  loading = false;
  tipos = [
    {name: 'Admin', code: 1},
    {name: 'Super Admin', code: 2},
    {name: 'Usuario', code: 3},
  ];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder
  ) {
    this.userForm  = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      type: [3, Validators.required],
      id: [0]
    })
  }

  ngOnInit() {
    if (this.config.data.userId != null) {
      this.loading = true;
      this.userService.getUser(this.config.data.userId).subscribe({
        next: (user:User) => {
          this.userForm.patchValue(user);
        },
        error: ( err ) => {
          this.loading = false;
          // this.modalService.openSnackBar(err, 'error');
          // this.modalService.closeLoading();
        },
        complete: () => {this.loading= false}
      }); 
    }
  }

  closeDialog() {
    this.ref.close(false)
  }

  saveUser() {
    const isNewUser = this.config.data.userId === null;
    const user = this.userForm.getRawValue();
    const save$ = isNewUser ? this.userService.addUser(user) : this.userService.modifyUser(user);

    save$.subscribe({
      next: (user:User) => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: `Usuario ${isNewUser ? 'añadido' : 'modificado'}`, life: 3000 });
        this.ref.close(true)
      },
      error: ( err ) => {
        // this.loading = false;
        // this.modalService.openSnackBar(err, 'error');
        // this.modalService.closeLoading();
      },
      // complete: () => {this.loading= false}
    }); 
  }
}
