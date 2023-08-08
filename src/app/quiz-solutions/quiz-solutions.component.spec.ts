import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSolutionsComponent } from './quiz-solutions.component';

describe('QuizSolutionsComponent', () => {
  let component: QuizSolutionsComponent;
  let fixture: ComponentFixture<QuizSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizSolutionsComponent],
    });
    fixture = TestBed.createComponent(QuizSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
