import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/shared/api.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  response:any=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.GetData();
  }
  GetData()
  {
    this.api.getInfo().subscribe(res=>
    this.response=res as Array<Object>);
  }
}
