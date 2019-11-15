import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMateriaAlumnoComponent } from './alta-materia-alumno.component';

describe('AltaMateriaAlumnoComponent', () => {
  let component: AltaMateriaAlumnoComponent;
  let fixture: ComponentFixture<AltaMateriaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMateriaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMateriaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
