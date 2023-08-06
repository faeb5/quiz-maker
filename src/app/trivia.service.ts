import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Category} from "./category.model";
import {GetCategoriesResponse} from "./get-categories-response.model";
import {Question} from "./question.model";
import {GetQuestionsResponse} from "./get-questions-response.model";

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  readonly baseUrl = 'https://opentdb.com';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<GetCategoriesResponse>(`${this.baseUrl}/api_category.php`)
      .pipe(map(response => response.trivia_categories));
  }

  getQuestions(category: number, difficulty: string): Observable<Question[]> {
    const finalUrl = `${this.baseUrl}/api.php?amount=5&category=${category}&difficulty=${difficulty}`;
    console.log(finalUrl);
    return this.http.get<GetQuestionsResponse>(finalUrl)
      .pipe(map(response => response.results));
  }
}
