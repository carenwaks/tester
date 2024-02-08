import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent {
//  set the initial value
  name= new FormControl('')

  constructor(
    private router: Router
    ){}

  // method to update name value
  updateName(){
    this.name.setValue('Carmmen')
  }

  openHom(){
    this.router.navigate([''])
  }
}
