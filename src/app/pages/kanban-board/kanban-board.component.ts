import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Board } from 'src/app/models/board.model';
import { Task } from 'src/app/models/task.model';
import { KanbanService } from 'src/app/services/kanban.service';
import { AddColumnDialogComponent } from '../add-column-dialog/add-column-dialog.component';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  board: Board = new Board('', []);

  constructor(public dialog: MatDialog, private kanbanService: KanbanService) { }

  /* board: Board = new Board('Planned', [
    new Column('Ideas', [
      "Star Trek",
      "Star Wars",
      "Battlestar Galatica",
    ]),
    new Column('Watching', [
      "Teenage Mutant Ninja Turtles",
      "Turtles in a half shell",
      "Turtle Power",
      "They're the worlds",
      "Most fearsome, fighting team",
    ]),
    new Column('To Watch', [
      "Firefly",
      "Serenity",
      "Darling in the Franxx",
    ]),
    new Column('Done', [
      "Demon Slayer",
      "Merlin",
      "Fire Force",
    ]),
  ]); */

  ngOnInit(): void {
    this.board = this.kanbanService.getBoard();
  }

  openDialog(): void {
    this.dialog.open(AddColumnDialogComponent, {
      height: '300px',
      width: '300px',
      data: {name: ''},
    });}

  addTask(columnId: number, task: string): void {
    this.kanbanService.addTask(columnId, task);
  }

  delete(columnId: number): void {
    this.kanbanService.removeColumn(columnId);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else 
    {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
