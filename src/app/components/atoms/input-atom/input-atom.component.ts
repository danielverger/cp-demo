import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self, forwardRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-atom',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './input-atom.component.html',
  styleUrl: './input-atom.component.scss'
})
export class InputAtomComponent {
  @Input() type:string = "text";
  @Input() placeholder?: string;
  @Input() class: string = 'input'
  @Input() inputId?: string;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() formName: string | null = null;

  @Input() group!: FormGroup;
}
