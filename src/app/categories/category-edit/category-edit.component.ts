import { Component, OnInit, inject } from '@angular/core';
import { FormFieldMoleculeComponent } from '../../components/molecules/form-field-molecule/form-field-molecule.component';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Category } from '../../auth/interfaces';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [
    FormFieldMoleculeComponent,
    ButtonModule,
    // SelectButtonModule,
    // LabelAtomComponent,
    ReactiveFormsModule,
    // SkeletonModule
  ],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.scss',
})
export class CategoryEditComponent implements OnInit {
  categoryForm!: FormGroup;
  categoryService = inject(CategoryService);
  messageService = inject(MessageService);
  loading = false;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      image: ['', Validators.required],
      id: [0],
    });
  }

  ngOnInit() {
    if (this.config.data.categoryId != null) {
      this.loading = true;
      this.categoryService.getCategory(this.config.data.categoryId).subscribe({
        next: (category: Category) => {
          this.categoryForm.patchValue(category);
        },
        error: err => {
          this.loading = false;
          // this.modalService.openSnackBar(err, 'error');
          // this.modalService.closeLoading();
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }

  closeDialog() {
    this.ref.close(false);
  }

  saveCategory() {
    const isNewCategory = this.config.data.categoryId === null;
    const category = this.categoryForm.getRawValue();
    const save$ = isNewCategory
      ? this.categoryService.addCategory(category)
      : this.categoryService.modifyCategory(category);

    save$.subscribe({
      next: (category: Category) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: `Categoria ${isNewCategory ? 'añadida' : 'modificada'}`,
          life: 3000,
        });
        this.ref.close(true);
      },
      error: err => {
        // this.loading = false;
        // this.modalService.openSnackBar(err, 'error');
        // this.modalService.closeLoading();
      },
      // complete: () => {this.loading= false}
    });
  }
}
