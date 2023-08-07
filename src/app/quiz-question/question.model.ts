export interface Question {
  text: string;
  answers: string[];
  correct_answer: string;
  selected_answer?: string;
}
