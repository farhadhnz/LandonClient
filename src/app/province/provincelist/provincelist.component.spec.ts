import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincelistComponent } from './provincelist.component';

describe('ProvincelistComponent', () => {
  let component: ProvincelistComponent;
  let fixture: ComponentFixture<ProvincelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
