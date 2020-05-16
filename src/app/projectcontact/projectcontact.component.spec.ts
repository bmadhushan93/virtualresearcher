import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcontactComponent } from './projectcontact.component';

describe('ProjectcontactComponent', () => {
  let component: ProjectcontactComponent;
  let fixture: ComponentFixture<ProjectcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
