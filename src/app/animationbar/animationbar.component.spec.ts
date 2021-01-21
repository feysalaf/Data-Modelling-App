import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationbarComponent } from './animationbar.component';

describe('AnimationbarComponent', () => {
  let component: AnimationbarComponent;
  let fixture: ComponentFixture<AnimationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
