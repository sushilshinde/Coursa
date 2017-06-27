import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesComponent } from './universities.component';

describe('UniversitiesComponent', () => {
  let component: UniversitiesComponent;
  let fixture: ComponentFixture<UniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
