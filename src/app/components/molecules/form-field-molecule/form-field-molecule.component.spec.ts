import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldMoleculeComponent } from './form-field-molecule.component';

describe('FormFieldMoleculeComponent', () => {
  let component: FormFieldMoleculeComponent;
  let fixture: ComponentFixture<FormFieldMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldMoleculeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
