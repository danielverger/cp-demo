import { Component, Input } from '@angular/core';
import { LabelAtomComponent } from '../../atoms/label-atom/label-atom.component';
import { CheckboxAtomComponent } from '../../atoms/checkbox-atom/checkbox-atom.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox-field-molecule',
  standalone: true,
  imports: [
    LabelAtomComponent,
    CheckboxAtomComponent,
  ],
  templateUrl: './form-checkbox-field-molecule.component.html',
  styleUrl: './form-checkbox-field-molecule.component.scss'
})
export class FormCheckboxFieldMoleculeComponent {
  @Input() checkboxId: string = ''; 
  @Input() labelText: string = ''; // Texto del label
  @Input() labelFor: string = ''; // ID del input al que el label está asociado
  @Input() labelClass: string = ''; // Clases CSS adicionales del label
  @Input() required: boolean = false; // Indica si el campo es requerido
  @Input() disabled: boolean = false; // Indica si el campo es requerido
  @Input() readonly: boolean = false; // Indica si el campo es requerido
  @Input() formName: string = '';

  @Input() group!: FormGroup;
}
