import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TriviaCategory } from './trivia-category.model';
import { TriviaQuestion } from './trivia-question.model';
import { TriviaCategoriesResponse } from './trivia-categories-response.model';
import { TriviaQuestionsResponse } from './trivia-questions-response.model';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  readonly baseUrl = 'https://opentdb.com';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<TriviaCategory[]> {
    return this.http
      .get<TriviaCategoriesResponse>(`${this.baseUrl}/api_category.php`)
      .pipe(map((response) => response.trivia_categories));
  }

  getQuestions(
    category: number,
    difficulty: string,
  ): Observable<TriviaQuestion[]> {
    return this.http
      .get<TriviaQuestionsResponse>(
        `${this.baseUrl}/api.php?amount=5&category=${category}&difficulty=${difficulty}`,
      )
      .pipe(map((response) => response.results));
  }
}
