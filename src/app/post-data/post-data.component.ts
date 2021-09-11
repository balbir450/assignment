import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/shared/api.service';


@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})
export class PostDataComponent implements OnInit {
  detailsForm!: FormGroup;
  urlReader: any;
  thumbnail_urlReader: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.detailsForm = new FormGroup({
      title: new FormControl(),
      url: new FormControl(),
      thumbnail_url: new FormControl(),
    });
  }

  onSubmit() {
    this.detailsForm.value.thumbnail_url = this.thumbnail_urlReader;
    this.detailsForm.value.url = this.urlReader;
    this.api.postInfo(this.detailsForm.value).subscribe(
      (res) => console.log('sucess', res),
      (err) => console.log('error', err)
    );
  }

  onfileChange(event: any) {
    if (event.target.files[0] && event.target.files[0].length != 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (res: any) => {
        this.urlReader = reader.result;
      };
    }
  }
  onfileChange2(event: any) {
    if (event.target.files[0] && event.target.files[0].length != 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (res: any) => {
        this.thumbnail_urlReader = reader.result;
      };
    }
  }
}