import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkbox-atom',
  standalone: true,
  imports: [CheckboxModule, ReactiveFormsModule],
  templateUrl: './checkbox-atom.component.html',
  styleUrl: './checkbox-atom.component.scss',
})
export class CheckboxAtomComponent {
  @Input() checkboxId?: string;
  @Input() inputId?: string;
  @Input() binary: boolean = true;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;

  @Input() formName: string = '';
  @Input() group!: FormGroup;
}
