import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchResultService } from '../services/search-result.service';
import { DashboardModel } from '../models/dashboard';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  files: DashboardModel[];
  commentsForm = new FormGroup(
    {
      comment: new FormControl("", Validators.required),
    });
  searchTerm: string;
  navigationSubscription;

  constructor(
    private searchResult: SearchResultService, 
    private dashboardService : DashboardService,
    private activeRoute: ActivatedRoute,
    private router: Router, 
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.refreshData();
      }
    });
  }

  refreshData() {
    this.searchTerm = this.activeRoute.snapshot.queryParams["q"];
    this.searchResult.search(this.searchTerm)
      .subscribe(result => {
        this.files = (result as Object[]).map(file => {
          return (file as DashboardModel);
        }); // cast : transformo lo que viene del server a un modelo que yo conosco, que es DashbordModel
      });
  }

  ngOnInit() {
    this.refreshData();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
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

 