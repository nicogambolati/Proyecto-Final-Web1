import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { UploadFileModel } from '../models/uploadFile';
import { DashbordModel } from '../models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  files: DashbordModel[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getUploadFiles().subscribe(result => {
      this.files = (result as Object[]).map(file => (file as DashbordModel) ); // cast : transformo lo que viene del server a un modelo que yo conosco, que es DashbordModel
    })
  }

}
