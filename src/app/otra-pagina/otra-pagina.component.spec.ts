import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtraPaginaComponent } from './otra-pagina.component';

describe('OtraPaginaComponent', () => {
  let component: OtraPaginaComponent;
  let fixture: ComponentFixture<OtraPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtraPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtraPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
