import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-input-atom',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, CommonModule, SkeletonModule],
  templateUrl: './input-atom.component.html',
  styleUrl: './input-atom.component.scss',
})
export class InputAtomComponent {
  @Input() type: string = 'text';
  @Input() placeholder?: string;
  @Input() class: string = 'input';
  @Input() inputId?: string;
  // @Input() required: boolean = false;
  // @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() formName: string | null = null;

  @Input() group!: FormGroup;

  @ViewChild('input') button!: Input;
  @ViewChild('skeleton') skeleton!: Skeleton;
}
