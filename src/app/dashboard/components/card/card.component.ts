import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '../../../../../node_modules/@angular/material';
import { DiagAddCardComponent } from './diag-add-card/diag-add-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() list;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DiagAddCardComponent, {
      width: '250px',
      data: {}
    });
  }

}
