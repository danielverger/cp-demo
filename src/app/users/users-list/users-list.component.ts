import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  ConfirmationService,
  LazyLoadEvent,
  MessageService,
} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogService } from 'primeng/dynamicdialog';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { User } from '../../auth/interfaces';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { UsersFacade } from '../../../store/facade/users.facade';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    ToastModule,
    SkeletonModule,
    TagModule,
  ],
  providers: [MessageService, ConfirmationService, DialogService, UsersFacade],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);
  dialogService = inject(DialogService);

  readonly usersFacade = inject(UsersFacade);
  isLoading = this.usersFacade.loading;

  user!: User | null;
  cols!: Column[];
  users!: User[];

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'surname', header: 'Apellidos' },
      { field: 'email', header: 'Email' },
      { field: 'type', header: 'Tipo' },
      { field: '', header: '' },
    ];

    this.usersFacade.usersError$.subscribe(({ error }) => {
      error &&
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error,
          life: 3000,
        });
    });

    this.usersFacade.deletedUser$.subscribe(({ user, deleted }) => {
      if (deleted) {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: `Usuario ${user?.name} eliminado`,
          life: 3000,
        });
        this.usersFacade.getUsers();
      }
    });

    this.usersFacade.selecUsers$.subscribe(users => (this.users = users));

    this.usersFacade.getUsers();
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  exportToExcel(table: Table) {
    table.exportCSV();
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Seguro que quiere eliminar el usuario ' + user.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersFacade.deleteUser(user);
      },
    });
  }

  editUser(userId: string | null) {
    const ref = this.dialogService.open(UserEditComponent, {
      dismissableMask: false,
      header: userId === null ? 'Nuevo Usuario' : 'Modificar Usuario',
      data: {
        userId,
      },
      width: '600px',
    });
    ref.onClose.subscribe((reload: boolean) => {
      reload && this.usersFacade.getUsers();
    });
  }

  getTypeName(id: number) {
    return id === 1 ? 'Admin' : id === 2 ? 'Super Admin' : 'Usuario';
  }
}
