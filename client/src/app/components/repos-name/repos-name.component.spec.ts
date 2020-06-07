import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposNameComponent } from './repos-name.component';

describe('ReposNameComponent', () => {
  let component: ReposNameComponent;
  let fixture: ComponentFixture<ReposNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
