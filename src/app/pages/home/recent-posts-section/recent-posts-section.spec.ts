import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostsSection } from './recent-posts-section';

describe('RecentPostsSection', () => {
  let component: RecentPostsSection;
  let fixture: ComponentFixture<RecentPostsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPostsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPostsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
