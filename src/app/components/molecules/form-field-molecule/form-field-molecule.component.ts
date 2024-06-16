import { Component, Input } from '@angular/core';
import { LabelAtomComponent } from '../../atoms/label-atom/label-atom.component';
import { InputAtomComponent } from '../../atoms/input-atom/input-atom.component';
import { FormGroup } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-form-field-molecule',
  standalone: true,
  imports: [LabelAtomComponent, InputAtomComponent, SkeletonModule],
  templateUrl: './form-field-molecule.component.html',
  styleUrl: './form-field-molecule.component.scss',
})
export class FormFieldMoleculeComponent {
  @Input() labelText = ''; // Texto del label
  @Input() labelFor = ''; // ID del input al que el label está asociado
  @Input() inputType = 'text'; // Tipo del input
  @Input() inputPlaceholder = ''; // Placeholder del input
  @Input() inputClass = 'w-full'; // Clases CSS adicionales del input
  @Input() labelClass = 'block mb-2'; // Clases CSS adicionales del label
  @Input() required = false; // Indica si el campo es requerido
  @Input() loading = false; // Indica si el campo es requerido
  @Input() formName = '';

  @Input() group!: FormGroup;
}
