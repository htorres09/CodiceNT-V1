import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgtEstadisticaComponent } from './wdgt-estadistica.component';

describe('WdgtEstadisticaComponent', () => {
  let component: WdgtEstadisticaComponent;
  let fixture: ComponentFixture<WdgtEstadisticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgtEstadisticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgtEstadisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
