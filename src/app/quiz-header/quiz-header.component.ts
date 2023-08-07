import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TriviaCategory } from '../trivia/trivia-category.model';
import { TriviaService } from '../trivia/trivia.service';
import { TriviaQuestion } from '../trivia/trivia-question.model';
import { Question } from '../quiz-question/question.model';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.css'],
})
export class QuizHeaderComponent implements OnInit {
  categories: TriviaCategory[] = [];
  difficulties = ['easy', 'medium', 'hard'];
  @Output() createClicked = new EventEmitter<Question[]>();

  constructor(private triviaService: TriviaService) {}

  ngOnInit(): void {
    this.triviaService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  onSubmit(quizForm: NgForm) {
    const category = quizForm.value.categorySelect as number;
    const difficulty = quizForm.value.difficultySelect as string;
    this.triviaService
      .getQuestions(category, difficulty)
      .subscribe((triviaQuestions) => {
        const questions: Question[] = triviaQuestions.map((triviaQuestion) =>
          this.parseTriviaQuestion(triviaQuestion),
        );
        this.createClicked.emit(questions);
      });
  }

  parseTriviaQuestion(triviaQuestion: TriviaQuestion): Question {
    return {
      text: triviaQuestion.question,
      answers: [
        triviaQuestion.correct_answer,
        ...triviaQuestion.incorrect_answers,
      ],
      correct_answer: triviaQuestion.correct_answer,
    };
  }
}
