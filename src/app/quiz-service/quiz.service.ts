import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { TriviaService } from '../trivia-service/trivia.service';
import { TriviaQuestion } from '../trivia-service/trivia-question.model';
import { Category } from './category.model';
import { TriviaCategory } from '../trivia-service/trivia-category.model';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { TriviaQuestionsResponse } from '../trivia-service/trivia-questions-response.model';
import { TriviaCategoriesResponse } from '../trivia-service/trivia-categories-response.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions$: BehaviorSubject<Question[]> = new BehaviorSubject<
    Question[]
  >([]);

  constructor(private triviaService: TriviaService) {}

  createQuestions(category: number, difficulty: string): void {
    this.triviaService
      .getQuestions(category, difficulty)
      .pipe(
        map((response: TriviaQuestionsResponse) =>
          response.results.map(this.parseTriviaQuestion),
        ),
      )
      .subscribe((questions: Question[]) => this.questions$.next(questions));
  }

  getQuestions(): Subject<Question[]> {
    return this.questions$;
  }

  getCategories(): Observable<Category[]> {
    return this.triviaService
      .getCategories()
      .pipe(
        map((response: TriviaCategoriesResponse) =>
          response.trivia_categories.map(this.parseTriviaCategory),
        ),
      );
  }

  private parseTriviaCategory(triviaCategory: TriviaCategory): Category {
    return {
      id: triviaCategory.id,
      name: triviaCategory.name,
    };
  }

  private parseTriviaQuestion(triviaQuestion: TriviaQuestion): Question {
    return {
      text: triviaQuestion.question,
      answers: [
        triviaQuestion.correct_answer,
        ...triviaQuestion.incorrect_answers,
      ],
      correct_answer: triviaQuestion.correct_answer,
    };
  }
}
