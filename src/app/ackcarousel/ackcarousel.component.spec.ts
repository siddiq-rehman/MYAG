import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AckcarouselComponent } from './ackcarousel.component';

describe('AckcarouselComponent', () => {
  let component: AckcarouselComponent;
  let fixture: ComponentFixture<AckcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AckcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AckcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
