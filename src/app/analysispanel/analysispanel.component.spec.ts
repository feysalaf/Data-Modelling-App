import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysispanelComponent } from './analysispanel.component';

describe('AnalysispanelComponent', () => {
  let component: AnalysispanelComponent;
  let fixture: ComponentFixture<AnalysispanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysispanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysispanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
