import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadFileModel } from '../models/uploadFile';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  uploadFileForm = new FormGroup(
    {
      description : new FormControl("", Validators.required),
      file : new FormControl("", Validators.required),
    });
  
  get description() { return this.uploadFileForm.get('description'); }
  get file() { return this.uploadFileForm.get('file'); }

  constructor(
    private uploadService: UploadService, 
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadFileForm.get('file').value);
    formData.append('description', this.uploadFileForm.get('description').value);
    formData.append('userId', "5"); // TODO: Tomar userId de la cookie.

    this.http.post('/backend/uploadFile.php', formData)
      // TODO: Redirect al dashboard?
      .subscribe(result => console.log("Result", result));
  }

  onCancel() {
    this.router.navigate(["/dashboard"]);
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFileForm.get('file').setValue(file);
    }
  }
}
