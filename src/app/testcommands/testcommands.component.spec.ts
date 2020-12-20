import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcommandsComponent } from './testcommands.component';

describe('TestcommandsComponent', () => {
  let component: TestcommandsComponent;
  let fixture: ComponentFixture<TestcommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
