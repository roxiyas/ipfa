import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetoTitularComponent } from './neto-titular.component';

describe('NetoTitularComponent', () => {
  let component: NetoTitularComponent;
  let fixture: ComponentFixture<NetoTitularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetoTitularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetoTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
