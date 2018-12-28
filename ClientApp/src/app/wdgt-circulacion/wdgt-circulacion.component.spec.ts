import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgtCirculacionComponent } from './wdgt-circulacion.component';

describe('WdgtCirculacionComponent', () => {
  let component: WdgtCirculacionComponent;
  let fixture: ComponentFixture<WdgtCirculacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgtCirculacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgtCirculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
