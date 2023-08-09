import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from '../quiz-service/question.model';
import { QuizService } from '../quiz-service/quiz.service';
import { Subscription } from 'rxjs';
import { Category } from '../quiz-service/category.model';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  difficulties: string[] = [];
  questions: Question[] = [];
  questionsSubscription: Subscription | undefined;
  errorMessage: string | undefined;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.difficulties = this.quizService.getDifficulties();

    this.quizService.getCategories().subscribe({
      next: (categories: Category[]) => (this.categories = categories),
      error: () => (this.errorMessage = 'Unable to load categories'),
    });

    this.quizService.getQuestions().next([]);
    this.questionsSubscription = this.quizService.getQuestions().subscribe({
      next: (questions: Question[]) => (this.questions = questions),
      error: () => (this.errorMessage = 'Unable to load questions'),
    });
  }

  ngOnDestroy(): void {
    if (this.questionsSubscription) {
      this.questionsSubscription.unsubscribe();
    }
  }

  isAllQuestionsAnswered(): boolean {
    return (
      this.questions.length > 0 &&
      this.questions.find((question: Question) => !question.selected_answer) ===
        undefined
    );
  }

  onSubmitClicked(): void {
    this.quizService.getQuestions().next(this.questions);
  }
}
