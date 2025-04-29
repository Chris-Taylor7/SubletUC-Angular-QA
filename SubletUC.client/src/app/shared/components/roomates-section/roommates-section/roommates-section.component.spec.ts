import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommatesSectionComponent } from './roommates-section.component';

describe('RoommatesSectionComponent', () => {
  let component: RoommatesSectionComponent;
  let fixture: ComponentFixture<RoommatesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoommatesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoommatesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
