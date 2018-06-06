import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-diag-add-list',
  templateUrl: './diag-add-list.component.html',
  styleUrls: ['./diag-add-list.component.scss']
})
export class DiagAddListComponent {

  constructor(
    public dialogRef: MatDialogRef<DiagAddListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
