import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSolutionComponent } from './quiz-solution.component';

describe('QuizSolutionComponent', () => {
  let component: QuizSolutionComponent;
  let fixture: ComponentFixture<QuizSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizSolutionComponent],
    });
    fixture = TestBed.createComponent(QuizSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
