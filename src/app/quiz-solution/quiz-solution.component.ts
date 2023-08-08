import { Component, Input } from '@angular/core';
import { Question } from '../quiz-service/question.model';

@Component({
  selector: 'app-quiz-solution',
  templateUrl: './quiz-solution.component.html',
  styleUrls: ['./quiz-solution.component.css'],
})
export class QuizSolutionComponent {
  @Input() question: Question = {} as Question;

  isCorrectAnswer(answer: string): boolean {
    return answer === this.question.correct_answer;
  }

  isIncorrectAnswer(answer: string): boolean {
    return (
      answer === this.question.selected_answer && !this.isCorrectAnswer(answer)
    );
  }
}
