import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { MaterialModule } from '../material.module';
import { KanbanBoardComponent } from './pages/kanban-board/kanban-board.component';
import { AboutComponent } from './pages/about/about.component';
import { AddColumnDialogComponent } from './pages/add-column-dialog/add-column-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    KanbanBoardComponent,
    AboutComponent,
    AddColumnDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
