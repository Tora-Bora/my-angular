import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorGestureComponent } from './cursor-gesture.component';

describe('CursorGestureComponent', () => {
  let component: CursorGestureComponent;
  let fixture: ComponentFixture<CursorGestureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursorGestureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorGestureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
