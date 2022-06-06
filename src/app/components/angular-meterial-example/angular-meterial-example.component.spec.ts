import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMeterialExampleComponent } from './angular-meterial-example.component';

describe('AngularMeterialExampleComponent', () => {
  let component: AngularMeterialExampleComponent;
  let fixture: ComponentFixture<AngularMeterialExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMeterialExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMeterialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
