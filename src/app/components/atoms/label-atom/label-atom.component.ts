import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-atom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label-atom.component.html',
  styleUrl: './label-atom.component.scss',
})
export class LabelAtomComponent {
  @Input() text: string = '';
  @Input() labelClass?: string;
  @Input() forId?: string;
  @Input() required: boolean = false;
}
