import { Component, Input } from '@angular/core';
import { Question } from '../quiz-service/question.model';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
})
export class QuizQuestionComponent {
  @Input() question: Question = {} as Question;

  onClick(answer: string): void {
    this.question.selected_answer = answer;
  }

  isSelectedAnswer(answer: string): boolean {
    return answer === this.question.selected_answer;
  }
}
