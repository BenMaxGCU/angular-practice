import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { AddColumnDialogComponent } from '../add-column-dialog/add-column-dialog.component';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  board: Board = new Board('Planned', [
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
  ]);

  openDialog(): void {
    this.dialog.open(AddColumnDialogComponent, {
      height: '300px',
      width: '300px',
      data: {column: '', board: ''},
    });}

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
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
