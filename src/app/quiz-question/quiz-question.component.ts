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
    const answers = question.answers;
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
  }

  onClick(answer: string): void {
    this.question.selected_answer = answer;
  }

  isSelectedAnswer(answer: string): boolean {
    return answer === this.question.selected_answer;
  }
}
