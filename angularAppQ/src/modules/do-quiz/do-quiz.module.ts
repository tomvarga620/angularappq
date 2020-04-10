import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { DoQuizRoutingModule } from './do-quiz-routing';

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    DoQuizRoutingModule
  ]
})
export class DoQuizModule { }
