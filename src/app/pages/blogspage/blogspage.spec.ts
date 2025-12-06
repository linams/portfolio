import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogspage } from './blogspage';

describe('Blogspage', () => {
  let component: Blogspage;
  let fixture: ComponentFixture<Blogspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
