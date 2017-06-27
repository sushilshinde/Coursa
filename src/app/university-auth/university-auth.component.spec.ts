import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityAuthComponent } from './university-auth.component';

describe('UniversityAuthComponent', () => {
  let component: UniversityAuthComponent;
  let fixture: ComponentFixture<UniversityAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
