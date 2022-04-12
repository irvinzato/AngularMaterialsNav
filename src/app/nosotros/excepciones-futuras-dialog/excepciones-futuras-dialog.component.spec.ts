import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcepcionesFuturasDialogComponent } from './excepciones-futuras-dialog.component';

describe('ExcepcionesFuturasDialogComponent', () => {
  let component: ExcepcionesFuturasDialogComponent;
  let fixture: ComponentFixture<ExcepcionesFuturasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcepcionesFuturasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcepcionesFuturasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
