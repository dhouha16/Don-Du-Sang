import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddanalyseComponent } from './addanalyse.component';

describe('AddanalyseComponent', () => {
  let component: AddanalyseComponent;
  let fixture: ComponentFixture<AddanalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddanalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddanalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
