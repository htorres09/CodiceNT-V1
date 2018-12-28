import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgtComputoComponent } from './wdgt-computo.component';

describe('WdgtComputoComponent', () => {
  let component: WdgtComputoComponent;
  let fixture: ComponentFixture<WdgtComputoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdgtComputoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgtComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
