import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAuthComponent } from './student-auth.component';

describe('StudentAuthComponent', () => {
  let component: StudentAuthComponent;
  let fixture: ComponentFixture<StudentAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
