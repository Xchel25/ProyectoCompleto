import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdatosComponent } from './verdatos.component';

describe('VerdatosComponent', () => {
  let component: VerdatosComponent;
  let fixture: ComponentFixture<VerdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerdatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
