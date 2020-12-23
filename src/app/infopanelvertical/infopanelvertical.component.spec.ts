import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopanelverticalComponent } from './infopanelvertical.component';

describe('InfopanelverticalComponent', () => {
  let component: InfopanelverticalComponent;
  let fixture: ComponentFixture<InfopanelverticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopanelverticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopanelverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
