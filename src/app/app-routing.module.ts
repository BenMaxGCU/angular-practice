import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { KanbanBoardComponent } from './pages/kanban-board/kanban-board.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

const routes: Routes = [
  {
    path: '', component: KanbanBoardComponent
  },
  {
    path: 'about', component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
