import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/shared/api.service';

@Component({
  selector: 'app-assets-data',
  templateUrl: './assets-data.component.html',
  styleUrls: ['./assets-data.component.css']
})
export class AssetsDataComponent implements OnInit {
url="./assets/img/3.jpg";
  constructor(private api : ApiService) { }
  response:any=[];
  fromAssetsFolder: any;
  fromAssets2Folder: any = [];
  data:any=[];
  ngOnInit(): void {
    this.api.getAssetData().subscribe((data) => {
    this.fromAssetsFolder = data;
    this.fromAssets2Folder = this.fromAssetsFolder.users;
    console.log(this.fromAssets2Folder);
  });
  }
  
} 

