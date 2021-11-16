import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutMedicamentosComponent } from './aut-medicamentos.component';

describe('AutMedicamentosComponent', () => {
  let component: AutMedicamentosComponent;
  let fixture: ComponentFixture<AutMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutMedicamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
