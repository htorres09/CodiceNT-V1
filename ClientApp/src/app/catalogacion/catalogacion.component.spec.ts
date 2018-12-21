import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogacionComponent } from './catalogacion.component';

describe('CatalogacionComponent', () => {
  let component: CatalogacionComponent;
  let fixture: ComponentFixture<CatalogacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
