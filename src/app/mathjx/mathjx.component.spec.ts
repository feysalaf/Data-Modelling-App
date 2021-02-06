import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathjxComponent } from './mathjx.component';

describe('MathjxComponent', () => {
  let component: MathjxComponent;
  let fixture: ComponentFixture<MathjxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathjxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathjxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
