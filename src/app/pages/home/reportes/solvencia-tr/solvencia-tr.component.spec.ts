import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvenciaTrComponent } from './solvencia-tr.component';

describe('SolvenciaTrComponent', () => {
  let component: SolvenciaTrComponent;
  let fixture: ComponentFixture<SolvenciaTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolvenciaTrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolvenciaTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
