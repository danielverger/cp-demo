import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormFieldMoleculeComponent } from '../../components/molecules/form-field-molecule/form-field-molecule.component';
import { UserService } from '../../services/user.service';
import { User } from '../../auth/interfaces';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LabelAtomComponent } from '../../components/atoms/label-atom/label-atom.component';
import { MessageService } from 'primeng/api';
import { SkeletonModule } from 'primeng/skeleton';
import { UsersFacade } from '../../../store/facade/users.facade';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    FormFieldMoleculeComponent,
    ButtonModule,
    SelectButtonModule,
    LabelAtomComponent,
    ReactiveFormsModule,
    SkeletonModule,
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss',
})
export class UserEditComponent implements OnInit {
  userForm!: FormGroup;
  messageService  = inject(MessageService);
  destroyRef      = inject(DestroyRef);
  usersFacade     = inject(UsersFacade);

  isLoading = this.usersFacade.loadingUser;
  isNewUser = this.config.data.userId === null;

  tipos = [
    { name: 'Admin', code: 1 },
    { name: 'Super Admin', code: 2 },
    { name: 'Usuario', code: 3 },
  ];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    readonly fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      name:     ['', Validators.required],
      surname:  ['', Validators.required],
      type:     [3, Validators.required],
      id:       [0],
    });
  }

  ngOnInit() {
    this.usersFacade.userError$.subscribe(({ error }) => {
      error &&
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
          life: 3000,
        });
    });
    if (this.config.data.userId != null) {
      this.usersFacade.getUser(this.config.data.userId);
      this.usersFacade.selectedUser$.subscribe(({ user, loaded }) => {
        // console.log({user, loaded});
        loaded && user && this.userForm.patchValue(user);
        // if ( !loaded ) return
        // if ( !hero ) {
        //     this.modalService.openSnackBar(`Hero with id ${this.selectedHeroId} not exists`, 'error')
        //     .afterOpened().subscribe(
        //       () => this.router.navigate(['dashboard/heroes'])
        //     )
        // } else {
        //     this.heroForm.patchValue(hero);
        //     this.inputName.nativeElement.select();
        // }
      });
    }

    this.usersFacade.modifiedUser
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ user, modified }) => {
        if (modified) {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: `Usuario ${this.isNewUser ? 'añadido' : 'modificado'}`,
            life: 3000,
          });
          this.ref.close(true);
        }
      });

    // if (this.config.data.userId != null) {
    //   this.loading = true;
    //   this.userService.getUser(this.config.data.userId).subscribe({
    //     next: (user:User) => {
    //       this.userForm.patchValue(user);
    //     },
    //     error: ( err ) => {
    //       this.loading = false;
    //     },
    //     complete: () => {this.loading= false}
    //   });
    // }
  }

  closeDialog() {
    this.ref.close(false);
  }

  saveUser() {
    // const isNewUser = this.config.data.userId === null;
    const user = this.userForm.getRawValue();
    this.isNewUser
      ? this.usersFacade.addUser(user)
      : this.usersFacade.updateUser(user);

    // save$.subscribe({
    //   next: (user:User) => {
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: `Usuario ${isNewUser ? 'añadido' : 'modificado'}`, life: 3000 });
    //     this.ref.close(true)
    //   },
    //   error: ( err ) => {
    //     // this.loading = false;
    //     // this.modalService.openSnackBar(err, 'error');
    //     // this.modalService.closeLoading();
    //   },
    //   // complete: () => {this.loading= false}
    // });
  }
}
