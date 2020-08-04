import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../services/search-result.service';
import { DashboardModel } from '../models/dashboard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  files: DashboardModel[];
  commentsForm = new FormGroup(
    {
      comment: new FormControl("", Validators.required),
    });

  constructor(
    private searchResult: SearchResultService, 
    private dashboardService : DashboardService,
    private route: ActivatedRoute
  ) { }

  refreshData() {
    this.searchResult.search(this.route.snapshot.queryParams["q"])
      .subscribe(result => {
        this.files = (result as Object[]).map(file => {
          return (file as DashboardModel);
        }); // cast : transformo lo que viene del server a un modelo que yo conosco, que es DashbordModel
      });
  }

  ngOnInit() {
    this.refreshData();
  }

  sendComment(file: DashboardModel) {
    this.dashboardService.sendComment(file.id, this.commentsForm.value.comment)
      .subscribe(() => {
        this.refreshData();
      });
  }

  likesCont(file) {
    this.dashboardService.updateLikes(file.id).subscribe(()=>file.likes++);
  }

}
