import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgtUsuariosComponent } from './wdgt-usuarios.component';

describe('WdgtUsuariosComponent', () => {
  let component: WdgtUsuariosComponent;
  let fixture: ComponentFixture<WdgtUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgtUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgtUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
