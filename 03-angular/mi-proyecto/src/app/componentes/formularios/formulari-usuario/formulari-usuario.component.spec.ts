import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariUsuarioComponent } from './formulari-usuario.component';

describe('FormulariUsuarioComponent', () => {
  let component: FormulariUsuarioComponent;
  let fixture: ComponentFixture<FormulariUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
