import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizService } from '../quiz-service/quiz.service';
import { Category } from '../quiz-service/category.model';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.css'],
})
export class QuizHeaderComponent {
  @Input() categories: Category[] = [];
  @Input() difficulties: string[] = [];

  constructor(private quizService: QuizService) {}

  onSubmit(quizForm: NgForm): void {
    const category: number = quizForm.value.categorySelect as number;
    const difficulty: string = quizForm.value.difficultySelect as string;
    this.quizService.createQuestions(category, difficulty);
  }
}
