import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const url:string = 'https://api.themoviedb.org/3/discover/movie?api_key=9f93a01d8cb42d468a444ed8bcf02fbf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { 

  }
  products : any = [];
  list : any = [];

  ngOnInit(){

    this.http.get(url).subscribe( (data:any)=>{
      console.log(data)
      this.list = data.results;
    })

    // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjkzYTAxZDhjYjQyZDQ2OGE0NDRlZDhiY2YwMmZiZiIsInN1YiI6IjYyMWU3YjBlOGM3YjBmMDA2ZGY3Y2ZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h7fr7O58xU9hfer0Ftjue-uM9cgR57zxszFUC-dhHtE';
    // // let header = new HttpHeaders().set( Authorization : `${token}`);
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${token}` 
    // }
    // )
    // // this.http.get("https://api.themoviedb.org/3/movie/550?api_key=9f93a01d8cb42d468a444ed8bcf02fbf", { headers: new HttpHeaders().set('Authorization', 'eyJhdWQiOiI5ZjkzYTAxZDhjYjQyZDQ2OGE0NDRlZDhiY2YwMmZiZiIsInN1YiI6IjYyMWU3YjBlOGM3YjBmMDA2ZGY3Y2ZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ'),  }).subscribe((data: any)=>{
    // //   console.log(data);
    // //   this.products = data;
    // // })
    // // return this.http.get("https://api.themoviedb.org/3/movie/550?api_key=9f93a01d8cb42d468a444ed8bcf02fbf", { headers: new HttpHeaders().set('Authorization', 'eyJhdWQiOiI5ZjkzYTAxZDhjYjQyZDQ2OGE0NDRlZDhiY2YwMmZiZiIsInN1YiI6IjYyMWU3YjBlOGM3YjBmMDA2ZGY3Y2ZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ'),  }).subscribe((data: any)=>{
    // //   console.log(data);
    // //   this.products = data;
    // // })
    
    // // this.http.get('https://api.themoviedb.org/3/movie/550?api_key=9f93a01d8cb42d468a444ed8bcf02fbf', {headers:header}
    // // )
  }



  

}
// new HttpHeaders('Authorization': ${token});