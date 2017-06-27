import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USignUpComponent } from './usign-up.component';

describe('USignUpComponent', () => {
  let component: USignUpComponent;
  let fixture: ComponentFixture<USignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
