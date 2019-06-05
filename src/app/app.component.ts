import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  courses:any;
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get('https://training-search-node-app.appspot.com/getAllCourses').subscribe((data)=>{
          this.courses=data;
    });
  }

  getCourses(loc){
    this.http.get('https://training-search-node-app.appspot.com/allcoursesbyloc/'+loc).subscribe((data)=>{
        this.courses=data;
    });
  }
}
