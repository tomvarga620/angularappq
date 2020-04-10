import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QShowComponent } from './q-show.component';

describe('QShowComponent', () => {
  let component: QShowComponent;
  let fixture: ComponentFixture<QShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
