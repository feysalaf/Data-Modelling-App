import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalpipeComponent } from './terminalpipe.component';

describe('TerminalpipeComponent', () => {
  let component: TerminalpipeComponent;
  let fixture: ComponentFixture<TerminalpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
