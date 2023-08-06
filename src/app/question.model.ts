import {Category} from "./category.model";

export interface Question {
  category: Category;
  correct_answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  incorrect_answers: string[];
  question: string;
  type: 'multiple' | 'boolean';
}
