import { EventEmitter, Injectable } from '@angular/core';
import { Question } from './question.model';
import { TriviaService } from '../trivia/trivia.service';
import { TriviaQuestion } from '../trivia/trivia-question.model';
import { Category } from './category.model';
import { TriviaCategory } from '../trivia/trivia-category.model';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questions: Question[] = [];

  constructor(private triviaService: TriviaService) {}

  onQuestionsCreated = new EventEmitter<Question[]>();

  createQuestions(
    category: number,
    difficulty: string,
  ): Observable<Question[]> {
    return this.triviaService
      .getQuestions(category, difficulty)
      .pipe(map((response) => response.results.map(this.parseTriviaQuestion)));
  }

  saveQuestions(questions: Question[]) {
    this.questions = questions.slice();
  }

  getQuestions(): Question[] {
    return this.questions.slice();
  }

  getCategories(): Observable<Category[]> {
    return this.triviaService
      .getCategories()
      .pipe(
        map((response) =>
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
