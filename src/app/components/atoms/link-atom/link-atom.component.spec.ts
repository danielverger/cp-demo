import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAtomComponent } from './link-atom.component';

describe('LinkAtomComponent', () => {
  let component: LinkAtomComponent;
  let fixture: ComponentFixture<LinkAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkAtomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
