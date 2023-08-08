import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../quiz-service/question.model';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
})
export class QuizQuestionComponent implements OnInit {
  @Input() question: Question = {} as Question;

  ngOnInit(): void {
    this.shuffleAnswers(this.question);
  }

  shuffleAnswers(question: Question): void {
    question.answers.sort(() => 0.5 - Math.random());
  }

  onClick(answer: string) {
    this.question.selected_answer = answer;
  }

  isSelectedAnswer(answer: string) {
    return answer === this.question.selected_answer;
  }
}
