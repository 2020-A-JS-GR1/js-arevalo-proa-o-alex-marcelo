import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tienda1Component } from './tienda1.component';

describe('Tienda1Component', () => {
  let component: Tienda1Component;
  let fixture: ComponentFixture<Tienda1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tienda1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tienda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
