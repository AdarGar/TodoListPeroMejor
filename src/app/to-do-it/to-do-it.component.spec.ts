import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItComponent } from './to-do-it.component';

describe('ToDoItComponent', () => {
  let component: ToDoItComponent;
  let fixture: ComponentFixture<ToDoItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
