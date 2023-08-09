import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from '../quiz-service/question.model';
import { QuizService } from '../quiz-service/quiz.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz-solutions',
  templateUrl: './quiz-solutions.component.html',
  styleUrls: ['./quiz-solutions.component.css'],
})
export class QuizSolutionsComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  score: number = 0;
  questionsSubscription: Subscription | undefined = undefined;

  constructor(
    private quizService: QuizService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.questionsSubscription = this.quizService.getQuestions().subscribe({
      next: (questions: Question[]) => {
        this.questions = questions;
        if (this.questions.length === 0) {
          this.router.navigate(['/quiz']);
        }
        this.calculateScore();
      },
      error: () => console.error('unable to load questions'),
    });
  }

  ngOnDestroy(): void {
    if (this.questionsSubscription) {
      this.questionsSubscription.unsubscribe();
    }
  }

  private calculateScore(): void {
    this.questions.forEach(
      (question: Question) => (this.score += this.getScore(question)),
    );
  }

  private getScore(question: Question): number {
    return question.correct_answer === question.selected_answer ? 1 : 0;
  }

  isRed(): boolean {
    return this.score <= 1;
  }

  isYellow(): boolean {
    return this.score >= 2 && this.score <= 3;
  }

  isGreen(): boolean {
    return this.score >= 4;
  }
}
