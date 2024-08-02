import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModusuarioComponent } from './modusuario.component';

describe('ModusuarioComponent', () => {
  let component: ModusuarioComponent;
  let fixture: ComponentFixture<ModusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
