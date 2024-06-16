import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Skeleton, SkeletonModule } from 'primeng/skeleton';

export enum Size {
  small = 'small',
  large = 'large',
}

export enum SizeConverter {
  small = '2rem',
  large = '3rem',
}

@Component({
  selector: 'app-button-icon-atom',
  standalone: true,
  imports: [ButtonModule, RippleModule, CommonModule, SkeletonModule],
  templateUrl: './button-icon-atom.component.html',
  styleUrl: './button-icon-atom.component.scss',
})
export class ButtonIconAtomComponent {
  @Input() label!: string;

  @Input() icon!: string;

  @Input() class: string = '';

  @Input() disabled: boolean = false;

  @Input() rounded: boolean = false;

  @Input() loading: boolean = false;

  public skeletonSize: string = '2.5rem';

  private _size!: Size;

  get size(): Size {
    return this._size;
  }
  @Input() set size(value: Size) {
    this.skeletonSize = SizeConverter[value];
    this._size = value;
  }

  @Input() severity?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'help'
    | 'danger';

  @Output() onClick = new EventEmitter<Event>();

  @ViewChild('button') button!: Button;
  @ViewChild('skeleton') skeleton!: Skeleton;
}
