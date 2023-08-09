import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizSolutionsComponent } from './quiz-solutions/quiz-solutions.component';

const routes: Routes = [
  { path: '', component: QuizQuestionsComponent },
  { path: 'solution', component: QuizSolutionsComponent },
  { path: '**', component: QuizQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
