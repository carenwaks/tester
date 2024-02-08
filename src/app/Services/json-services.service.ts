import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import the post interfaceand rxjs
import { Observable, map } from 'rxjs';
import { Posts } from '../Interface/posts';
import { Bored } from '../Interface/bored';
@Injectable({
  providedIn: 'root'
})
export class JsonServicesService {

  // injecting the dependency
  private baseUrl= 'https://jsonplaceholder.typicode.com/posts'
  // private boredUrl ='https://www.boredapi.com/api/activity'
  constructor(private httpClient : HttpClient) { }

  // fetch the data
  // Observable<Posts[]> 
  // pipeused befor using operator ,b4 you subscribe
  getPosts(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(`${this.baseUrl}`).pipe(
      map(posts => posts.filter(post => post.userId === 7))
    )
  }

  getBored(){
      return this.httpClient.get('https://www.boredapi.com/api/activity').pipe(
    
      ).subscribe(
        response => {
          console.log(response);
          
        }
      )
    }

}

// getPosts(){
//   return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').pipe(

//   ).subscribe(
//     response => {
//       console.log(response);
      
//     }
//   )
// }