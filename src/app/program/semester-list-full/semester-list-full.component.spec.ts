import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterListFullComponent } from './semester-list-full.component';

describe('SemesterListFullComponent', () => {
  let component: SemesterListFullComponent;
  let fixture: ComponentFixture<SemesterListFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterListFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterListFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
