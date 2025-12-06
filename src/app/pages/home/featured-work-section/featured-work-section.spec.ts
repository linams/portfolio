import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWorkSection } from './featured-work-section';

describe('FeaturedWorkSection', () => {
  let component: FeaturedWorkSection;
  let fixture: ComponentFixture<FeaturedWorkSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedWorkSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedWorkSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
