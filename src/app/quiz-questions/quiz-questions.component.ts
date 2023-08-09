import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from '../quiz-service/question.model';
import { QuizService } from '../quiz-service/quiz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  questionsSubscription: Subscription | undefined = undefined;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuestions().next([]);
    this.questionsSubscription = this.quizService.getQuestions().subscribe({
      next: (questions: Question[]) => (this.questions = questions),
      error: () => console.error('Unable to load questions'),
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
