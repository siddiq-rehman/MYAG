import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AckmentComponent } from './ackment.component';

describe('AckmentComponent', () => {
  let component: AckmentComponent;
  let fixture: ComponentFixture<AckmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AckmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AckmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
