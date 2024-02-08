import { Component } from '@angular/core';
// import neccessary form classes 
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  reactiveForm :FormGroup

  constructor(private fb:FormBuilder){
    this.reactiveForm = this.fb.group({
      firstName:[''],
      lastName :[''],
      fandom :[''],
      bias :[''],
      email:[''],
      password:['']
    })
  }

  onTest(){ 
    console.log(this.reactiveForm.value);
    
  }

}
