import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasProfesorComponent } from './materias-profesor.component';

describe('MateriasProfesorComponent', () => {
  let component: MateriasProfesorComponent;
  let fixture: ComponentFixture<MateriasProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
