import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeRegistrationComponent } from './make-registration.component';

describe('MakeRegistrationComponent', () => {
  let component: MakeRegistrationComponent;
  let fixture: ComponentFixture<MakeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
