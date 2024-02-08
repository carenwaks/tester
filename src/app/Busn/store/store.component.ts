import { Component, OnInit } from '@angular/core';
import { JsonServicesService } from 'src/app/Services/json-services.service';
import { Bored } from 'src/app/Interface/bored';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent  {
 filter: "all" | "active" | "done"= "all"
  showmsg= false
  data = ''
 allItems = [ 
  {task: "eat", done: true},
  {task: "sleep", done: false},
  {task: "play", done: true},
  {task: "run", done: false},
  {task: "drink", done: true},
  {task: "laugh", done: false}
 ]

//  get all tasks by using filter level
getItems() {
  if (this.filter === "all") {
    return this.allItems;
  }
  return this.allItems.filter((item) => 
  this.filter === "done" ? item.done : !item.done)
}

// add item to top of list
addItem(task: string) {
  this.allItems.unshift({
    task,
    done: false
  })
  this.showmsg = true
}

//  activity suggestion

}
