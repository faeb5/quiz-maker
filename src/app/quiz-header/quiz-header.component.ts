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
  difficulties: string[] = ['easy', 'medium', 'hard'];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService
      .getCategories()
      .subscribe((categories: Category[]) => (this.categories = categories));
  }

  onSubmit(quizForm: NgForm): void {
    const category: number = quizForm.value.categorySelect as number;
    const difficulty: string = quizForm.value.difficultySelect as string;
    this.quizService.createQuestions(category, difficulty);
  }
}
