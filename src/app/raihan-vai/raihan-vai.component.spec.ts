import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaihanVaiComponent } from './raihan-vai.component';

describe('RaihanVaiComponent', () => {
  let component: RaihanVaiComponent;
  let fixture: ComponentFixture<RaihanVaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaihanVaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaihanVaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
