import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaEspecificaComponent } from './memoria-especifica.component';

describe('MemoriaEspecificaComponent', () => {
  let component: MemoriaEspecificaComponent;
  let fixture: ComponentFixture<MemoriaEspecificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriaEspecificaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoriaEspecificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
