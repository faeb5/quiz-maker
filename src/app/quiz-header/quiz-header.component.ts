import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizService } from '../quiz-service/quiz.service';
import { Category } from '../quiz-service/category.model';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.css'],
})
export class QuizHeaderComponent implements OnInit {
  categories: Category[] = [];
  difficulties = ['easy', 'medium', 'hard'];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  onSubmit(quizForm: NgForm) {
    const category = quizForm.value.categorySelect as number;
    const difficulty = quizForm.value.difficultySelect as string;
    this.quizService
      .createQuestions(category, difficulty)
      .subscribe((questions) =>
        this.quizService.onQuestionsCreated.emit(questions),
      );
  }
}
