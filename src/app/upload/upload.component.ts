import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadFileModel } from '../models/uploadFile';
import { HttpClient } from '@angular/common/http';

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
    })

  constructor(private uploadService: UploadService, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadFileForm.get('file').value);
    formData.append('description', this.uploadFileForm.get('description').value);
    formData.append('userId', "5");

    this.http.post('/backend/uploadFile.php', formData).subscribe(result => console.log("Result", result));
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFileForm.get('file').setValue(file);
    }
  }
}
