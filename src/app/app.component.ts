import { Component } from '@angular/core';
import { Question } from './quiz-question/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quiz-maker';
  questions: Question[] = [];

  onCreateClicked(questions: Question[]) {
    this.questions = questions;
  }
}
