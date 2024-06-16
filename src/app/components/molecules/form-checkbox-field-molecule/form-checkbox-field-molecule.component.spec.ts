import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxFieldMoleculeComponent } from './form-checkbox-field-molecule.component';

describe('FormCheckboxFieldMoleculeComponent', () => {
  let component: FormCheckboxFieldMoleculeComponent;
  let fixture: ComponentFixture<FormCheckboxFieldMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCheckboxFieldMoleculeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCheckboxFieldMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
