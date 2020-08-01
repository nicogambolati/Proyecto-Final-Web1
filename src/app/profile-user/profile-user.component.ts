import { Component, OnInit } from '@angular/core';
import { DashboardModel } from '../models/dashboard';
import { ProfileUserService } from '../services/profile-user.service';
import { DeleteImageService } from '../services/delete-image.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  files: DashboardModel[];

  constructor(private profileUserService: ProfileUserService, private deleteFileService: DeleteImageService) { }

  refreshFiles() {
    this.profileUserService.getProfileUser().subscribe(result => {
      this.files = (result as Object[]).map(file => (file as DashboardModel) ); // cast : transformo lo que viene del server a un modelo que yo conosco, que es DashbordModel
    });
  }

  ngOnInit() {
    this.refreshFiles();
  }

  deleteButton(id){
    this.deleteFileService.deleteFile(id).subscribe(() => this.refreshFiles());
  }
}
