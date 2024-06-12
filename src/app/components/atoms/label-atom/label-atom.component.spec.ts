import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelAtomComponent } from './label-atom.component';

describe('LabelAtomComponent', () => {
  let component: LabelAtomComponent;
  let fixture: ComponentFixture<LabelAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelAtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabelAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
