import { TriviaCategory } from './trivia-category.model';

export interface TriviaQuestion {
  category: TriviaCategory;
  correct_answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  incorrect_answers: string[];
  question: string;
  type: 'multiple' | 'boolean';
}
