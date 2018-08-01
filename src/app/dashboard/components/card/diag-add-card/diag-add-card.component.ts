import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-diag-add-card',
  templateUrl: './diag-add-card.component.html',
  styleUrls: ['./diag-add-card.component.scss']
})
export class DiagAddCardComponent {

  nameNewCard: string;

  constructor(
    public dialogRef: MatDialogRef<DiagAddCardComponent>,
  ) { }

  save() {
    if (this.nameNewCard) {
      this.closeDialog();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
