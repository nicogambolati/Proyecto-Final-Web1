import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadFileModel } from '../models/uploadFile';

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

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  onSubmit() {
    const fileData = new UploadFileModel();
    fileData.description = this.uploadFileForm.get('description').value;

    this.uploadService.uploadFile(fileData).subscribe(result => console.log("result", result));
  }
}
