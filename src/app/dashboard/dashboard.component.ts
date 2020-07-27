import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { UploadFileModel } from '../models/uploadFile';
import { DashboardModel } from '../models/dashboard';
import { UserService } from '../services/user.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  files: DashboardModel[];
  commentsFormArray: FormArray;

  constructor(private dashboardService: DashboardService, private userService: UserService) { }

  ngOnInit() {
    this.commentsFormArray = new FormArray([
      new FormControl('comment')
    ]);

    this.dashboardService.getUploadFiles().subscribe(result => {
      this.files = (result as Object[]).map(file => {
        this.commentsFormArray.push(this.createCommentItem());
        return (file as DashboardModel);
      }); // cast : transformo lo que viene del server a un modelo que yo conosco, que es DashbordModel
    });


  }

  createCommentItem() {
    return new FormGroup({
      comment: new FormControl(''),
    })
  }

  sendComment(file: DashboardModel) {
    console.log("File: ", file);
  }

  likesCont(file){
    this.dashboardService.updateLikes(file.id).subscribe(()=>file.likes++);
  }


}
