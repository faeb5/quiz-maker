import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizSolutionComponent } from './quiz-solution/quiz-solution.component';
import { QuizSolutionsComponent } from './quiz-solutions/quiz-solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizHeaderComponent,
    QuizQuestionsComponent,
    QuizQuestionComponent,
    QuizSolutionsComponent,
    QuizSolutionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
