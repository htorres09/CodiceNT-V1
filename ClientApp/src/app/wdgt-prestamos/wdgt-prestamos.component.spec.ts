import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgtPrestamosComponent } from './wdgt-prestamos.component';

describe('WdgtPrestamosComponent', () => {
  let component: WdgtPrestamosComponent;
  let fixture: ComponentFixture<WdgtPrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgtPrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgtPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
