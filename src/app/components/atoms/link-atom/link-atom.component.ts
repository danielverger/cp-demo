import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-atom',
  standalone: true,
  imports: [],
  templateUrl: './link-atom.component.html',
  styleUrl: './link-atom.component.scss'
})
export class LinkAtomComponent {
  @Input() text: string = '';
  @Input() link: string = '';
}
