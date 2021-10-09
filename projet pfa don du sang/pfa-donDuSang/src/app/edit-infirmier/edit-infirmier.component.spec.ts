import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfirmierComponent } from './edit-infirmier.component';

describe('EditInfirmierComponent', () => {
  let component: EditInfirmierComponent;
  let fixture: ComponentFixture<EditInfirmierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInfirmierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInfirmierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
