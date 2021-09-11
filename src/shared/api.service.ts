import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http : HttpClient) { }
    postInfo(values: any) {
      return this.http.post
      (`https://jsonplaceholder.typicode.com/photos`,  values
      );  
    }
    getInfo(){
      return this.http.get(`https://jsonplaceholder.typicode.com/photos/`)
      }
    }
