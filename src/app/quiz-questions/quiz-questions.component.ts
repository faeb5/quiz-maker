import { Component, Input } from '@angular/core';
import { Question } from '../quiz-question/question.model';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent {
  @Input() questions: Question[] = [];

  isAllQuestionsAnswered(): boolean {
    return (
      this.questions.length > 0 &&
      this.questions.find((question) => !question.selected_answer) === undefined
    );
  }

  onClick() {
    // TODO redirect to solution page
    console.log(this.questions);
  }
}
