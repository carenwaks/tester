import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testive',
  templateUrl: './testive.component.html',
  styleUrls: ['./testive.component.css']
})
export class TestiveComponent implements OnInit {
  userName: any
  formdata: any
  ngOnInit() {
    this.formdata = new FormGroup({
      userName: new FormControl("Reactive forms test")
    })
  }
  onClickSubmit(data:any) {this.userName = data.userName}
}
