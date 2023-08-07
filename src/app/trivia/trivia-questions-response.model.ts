import {TriviaQuestion} from "./trivia-question.model";

export interface TriviaQuestionsResponse {
  response_code: 0 | 1 | 2 | 3 | 4;
  results: TriviaQuestion[];
}
