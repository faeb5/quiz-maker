import {Question} from "./question.model";

export interface GetQuestionsResponse {
  response_code: 0 | 1 | 2 | 3 | 4;
  results: Question[];
}
