import { v4 } from 'uuid';
import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private kanbanBoard: Board = new Board ('Board', []);

  constructor() { }

  getBoard() {
    return this.kanbanBoard
  }

  addColumn(columnName: string) {
    let id = (((1 + Math.random()) * 0x10000) | 0);
    this.kanbanBoard.columns.push(new Column(id, columnName, []));
  }
  
  removeColumn(columnId: number) {
    this.kanbanBoard.columns = this.kanbanBoard.columns.filter(x => x.id !== columnId);
  }

  addTask(columnId: number, task: string) {
    let id = v4();
    this.kanbanBoard.columns.find(x => x.id === columnId)?.tasks.push(new Task(id, task));
  }
}
