import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportscompComponent } from './reportscomp.component';

describe('ReportscompComponent', () => {
  let component: ReportscompComponent;
  let fixture: ComponentFixture<ReportscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
