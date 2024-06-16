import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-button-atom',
  standalone: true,
  imports: [ButtonModule, RippleModule, CommonModule],
  templateUrl: './button-atom.component.html',
  styleUrl: './button-atom.component.scss',
})
export class ButtonAtomComponent {
  @Input() label!: string;

  @Input() class: string = '';

  @Input() disabled: boolean = false;

  @Input() size?: 'small' | 'large';

  @Input() severity?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'help'
    | 'danger';

  @Output() onClick = new EventEmitter<Event>();
}
