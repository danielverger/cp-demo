import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import {DialogService} from 'primeng/dynamicdialog';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserService } from '../../services/user.service';
import { User } from '../../auth/interfaces';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { finalize, take } from 'rxjs';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

// export interface User {
//   id: string;
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
//   type: 'Admin' | 'SuperAdmin' | 'User'
// }

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
    TagModule
  ],
  providers: [MessageService, ConfirmationService, DialogService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit{

  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);
  dialogService = inject(DialogService);
  userService = inject(UserService);
  user!: User | null;
  cols!: Column[];
  loading = false;
  users: User[] = [...Array(10)].map(n => {
    return {
    id: 0,
    email: '',
    name: '',
    surname: '',
    type: 0,
    isActive: false
  }});

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'surname', header: 'Apellidos' },
      { field: 'email', header: 'Email' },
      { field: 'type', header: 'Tipo' },
      { field: '', header: '' },
    ];

    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    console.log('loadUsers before', this.users)
    this.userService.getUsers().pipe(take(1)).subscribe({
      next: (users:User[]) => {
        console.log('loadUsers next', this.users)
        this.users = users;
      },
      error: ( err ) => {
        this.loading = false;
        // this.modalService.openSnackBar(err, 'error');
        // this.modalService.closeLoading();
      },
      complete: () => {this.loading= false}
    }); 
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  exportToExcel(table: Table) {
    table.exportCSV();
  }

  deleteUser(user: User) {

    console.log(user)
    this.confirmationService.confirm({
        message: 'Seguro que quiere eliminar el usuario ' + user.name + '?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            // this.users = this.users.filter((val) => val.id !== user.id);
            // this.user = null;
            this.userService.deleteUser(user.id).pipe(
              finalize(()=>this.loadUsers())
            ).subscribe();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Usuario eliminado', life: 3000 });
        }
    });
  }

  editUser(userId: string | null) {
    const ref = this.dialogService.open( UserEditComponent, {
      dismissableMask: false,
      header: userId === null ? 'Nuevo Usuario' : 'Modificar Usuario',
      data: {
        userId
      },
      width: '600px'
    } )
    ref.onClose.subscribe((reload: boolean) => {
      if (reload) {
          this.loadUsers();
      }
    });
  }

  getTypeName(id:number) {
    return id === 1 ? 'Admin' : (id === 2 ? 'Super Admin' : 'Usuario')
  }
  // exportExcel() {
  //   import('xlsx').then((xlsx) => {
  //       const worksheet = xlsx.utils.json_to_sheet(this.products);
  //       const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //       const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
  //       this.saveAsExcelFile(excelBuffer, 'products');
  //   });
  // }

  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //   let EXCEL_EXTENSION = '.xlsx';
  //   const data: Blob = new Blob([buffer], {
  //       type: EXCEL_TYPE
  //   });
  //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  // }
}
