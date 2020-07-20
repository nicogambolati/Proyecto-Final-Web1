import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Source: https://stackblitz.com/edit/confirm-dialog-angular-material?file=src%2Fapp%2Fdialogo-confirmacion%2Fdialogo-confirmacion.component.ts
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogo: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

  ngOnInit() {
  }

  cancelDialog(): void {
    this.dialogo.close(false);
  }
  acceptDialog(): void {
    this.dialogo.close(true);
  }

}
