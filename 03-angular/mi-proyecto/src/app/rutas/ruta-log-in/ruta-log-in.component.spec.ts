import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaLogInComponent } from './ruta-log-in.component';

describe('RutaLogInComponent', () => {
  let component: RutaLogInComponent;
  let fixture: ComponentFixture<RutaLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
