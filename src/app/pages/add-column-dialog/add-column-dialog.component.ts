import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { KanbanService } from 'src/app/services/kanban.service';

export interface DialogData {
  columnName: string;
}

@Component({
  selector: 'app-add-column-dialog',
  templateUrl: './add-column-dialog.component.html',
  styleUrls: ['./add-column-dialog.component.scss']
})
export class AddColumnDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddColumnDialogComponent>,
    private kanbanService: KanbanService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  add(columnName: string): void {
    if(columnName) {
      this.kanbanService.addColumn(columnName);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
