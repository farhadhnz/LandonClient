import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterFormComponent } from './semester-form.component';

describe('SemesterFormComponent', () => {
  let component: SemesterFormComponent;
  let fixture: ComponentFixture<SemesterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
