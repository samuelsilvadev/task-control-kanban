import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-diag-add-list',
  templateUrl: './diag-add-list.component.html',
  styleUrls: ['./diag-add-list.component.scss']
})
export class DiagAddListComponent {

  nameNewList: string;

  constructor(
    public dialogRef: MatDialogRef<DiagAddListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _homeService: HomeService) { }

  save() {
    if (this.nameNewList) {
      this._homeService.getLists().push(
        {
          name: this.nameNewList, order: 4, cards: []
        }
      );
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
