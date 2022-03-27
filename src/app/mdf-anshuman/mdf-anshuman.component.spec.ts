import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfAnshumanComponent } from './mdf-anshuman.component';

describe('MdfAnshumanComponent', () => {
  let component: MdfAnshumanComponent;
  let fixture: ComponentFixture<MdfAnshumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdfAnshumanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfAnshumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
