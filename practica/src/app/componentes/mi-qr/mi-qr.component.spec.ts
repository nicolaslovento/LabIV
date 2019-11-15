import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiQrComponent } from './mi-qr.component';

describe('MiQrComponent', () => {
  let component: MiQrComponent;
  let fixture: ComponentFixture<MiQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
