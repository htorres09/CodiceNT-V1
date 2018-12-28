import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgtCubiculosComponent } from './wdgt-cubiculos.component';

describe('WdgtCubiculosComponent', () => {
  let component: WdgtCubiculosComponent;
  let fixture: ComponentFixture<WdgtCubiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgtCubiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgtCubiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
