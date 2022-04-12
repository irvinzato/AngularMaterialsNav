import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExcepcionDialogComponent } from './crear-excepcion-dialog.component';

describe('CrearExcepcionDialogComponent', () => {
  let component: CrearExcepcionDialogComponent;
  let fixture: ComponentFixture<CrearExcepcionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearExcepcionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExcepcionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
