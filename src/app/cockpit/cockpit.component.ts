import {Component, OnInit} from '@angular/core';
import {TriviaService} from "../trivia.service";
import {Category} from "../category.model";
import {NgForm} from "@angular/forms";
import {Question} from "../question.model";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  categories: Category[] = [];
  difficulties = ['Easy', 'Medium', 'Hard'];
  questions: Question[] = [];

  constructor(private triviaService: TriviaService) {
  }

  ngOnInit(): void {
    this.triviaService.getCategories().subscribe(categories => this.categories = categories);
  }

  onSubmit(quizForm: NgForm) {
    const category = quizForm.value.categorySelect as number;
    const difficulty = this.difficulties[quizForm.value.difficultySelect as number].toLowerCase();
    this.triviaService.getQuestions(category, difficulty).subscribe(questions => this.questions = questions);
  }
}
