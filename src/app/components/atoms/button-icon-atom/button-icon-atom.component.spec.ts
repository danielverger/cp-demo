import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconAtomComponent } from './button-icon-atom.component';

describe('ButtonIconAtomComponent', () => {
  let component: ButtonIconAtomComponent;
  let fixture: ComponentFixture<ButtonIconAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconAtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonIconAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
