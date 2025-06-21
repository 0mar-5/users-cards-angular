import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWrapper } from './users-wrapper';

describe('UsersWrapper', () => {
  let component: UsersWrapper;
  let fixture: ComponentFixture<UsersWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
