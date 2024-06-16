import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAtomComponent } from './button-atom.component';

describe('ButtonAtomComponent', () => {
  let component: ButtonAtomComponent;
  let fixture: ComponentFixture<ButtonAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
