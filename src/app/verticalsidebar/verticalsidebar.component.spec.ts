import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalsidebarComponent } from './verticalsidebar.component';

describe('VerticalsidebarComponent', () => {
  let component: VerticalsidebarComponent;
  let fixture: ComponentFixture<VerticalsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
