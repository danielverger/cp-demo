import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { Category } from '../../auth/interfaces';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CategoryService } from '../../services/category.service';
import { CategoryEditComponent } from '../category-edit/category-edit.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-categories-list',
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
  ],
  providers: [MessageService, ConfirmationService, DialogService],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent implements OnInit {

  confirmationService = inject(ConfirmationService);
  messageService = inject(MessageService);
  dialogService = inject(DialogService);
  categoryService = inject(CategoryService);
  
  loading = false;
  cols = [
    { field: 'name', header: 'Nombre' },
    { field: 'description', header: 'Descripción' },
    { field: 'image', header: 'Imagen' },
    { field: '', header: '' },
  ];

  categories: Category[] = [...Array(10)].map(n => {
    return {
      id: 0,
      name: '',
      description:'',
      image: '',
  }});

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.loading = true;
    this.categoryService.getCategories().subscribe({
      next: (categories:Category[]) => {
        this.categories = categories;
      },
      error: ( err ) => {
        this.loading = false;
        // this.modalService.openSnackBar(err, 'error');
        // this.modalService.closeLoading();
      },
      complete: () => {this.loading= false}
    }); 
  }

  // editCategory(categoryId: number | null) {}
  // deleteCategory(category: Category) {}
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  exportToExcel(table: Table) {
    table.exportCSV();
  }

  deleteCategory(category: Category) {

    this.confirmationService.confirm({
        message: 'Seguro que quiere eliminar la categoria ' + category.name + '?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            // this.categories = this.categories.filter((val) => val.id !== category.id);
            this.categoryService.deleteCategory(category.id).pipe(
              finalize(()=>this.loadCategories())
            ).subscribe();
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Categoria eliminada', life: 3000 });
        }
    });
  }

  editCategory(categoryId: string | null) {
    const ref = this.dialogService.open( CategoryEditComponent, {
      dismissableMask: false,
      header: categoryId === null ? 'Nueva Categoria' : 'Modificar Categoria',
      data: {
        categoryId
      },
      width: '600px'
    } )
    ref.onClose.subscribe((reload: boolean) => {
      if (reload) {
          this.loadCategories();
      }
    });
  }
}
