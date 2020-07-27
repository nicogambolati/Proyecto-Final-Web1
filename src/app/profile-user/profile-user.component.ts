import { Component, OnInit } from '@angular/core';
import { DashboardModel } from '../models/dashboard';
import { DashboardService } from '../services/dashboard.service';
import { UserService } from '../services/user.service';
import { ProfileUserService } from '../services/profile-user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  files: DashboardModel[];

  constructor(private profileUserService: ProfileUserService, private userService: UserService) { }

  ngOnInit() {
    this.profileUserService.getProfileUser().subscribe(result => {
      this.files = (result as Object[]).map(file => (file as DashboardModel) ); // cast : transformo lo que viene del server a un modelo que yo conosco, que es DashbordModel
    })
    this.userService.getActiveUser().subscribe(result => console.log(result));
  }

}
