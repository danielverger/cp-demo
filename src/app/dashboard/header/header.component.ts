import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarAtomComponent } from '../../components/atoms/avatar-atom/avatar-atom.component';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, AvatarAtomComponent, MenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items = [
    {
      label: 'Hola Daniel',
      items: [
        {
          label: 'Cambiar contraseña',
          icon: 'pi pi-refresh',
          command: () => {
            this.changePassword();
          },
        },
        {
          label: 'Cerrar sesión',
          icon: 'pi pi-sign-out',
          command: () => {
            this.logout();
          },
        },
      ],
    },
  ];

  logout() {}
  changePassword() {}
}
