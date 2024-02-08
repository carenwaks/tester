import { Component, OnInit } from '@angular/core';
import { JsonServicesService } from 'src/app/Services/json-services.service';
// import the post interface
import { Posts } from 'src/app/Interface/posts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit{
  // add posts array
  postss: Posts[] = [];

  constructor(private apiData:JsonServicesService,
    private router: Router
    ){}
  ngOnInit(): void {
      this.apiData.getPosts().subscribe((posts) => {
        this.postss = posts
      });
  }
  openForm(){
    console.log("clicked");
    this.router.navigate(['rform'])
    
  }
  openProfile(){
    
    this.router.navigate(['rprofile'])
  }

  openStore(){
    
    this.router.navigate(['store'])
  }
}
