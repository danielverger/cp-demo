import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-avatar-atom',
  standalone: true,
  imports: [
    AvatarModule, 
    BadgeModule
  ],
  templateUrl: './avatar-atom.component.html',
  styleUrl: './avatar-atom.component.scss'
})
export class AvatarAtomComponent {

  @Input()
  size?: 'large' | 'xlarge';

  @Input()
  style?: string;
  
}
