import { Component, OnInit } from '@angular/core';
import { Question } from '../quiz-service/question.model';
import { QuizService } from '../quiz-service/quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent implements OnInit {
  questions: Question[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.onQuestionsCreated.subscribe(
      (questions) => (this.questions = questions),
    );
  }

  isAllQuestionsAnswered(): boolean {
    return (
      this.questions.length > 0 &&
      this.questions.find((question) => !question.selected_answer) === undefined
    );
  }

  onSubmitClicked() {
    this.quizService.saveQuestions(this.questions);
  }
}
