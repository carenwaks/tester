import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators , FormArray} from '@angular/forms';


@Component({
  selector: 'app-rprofile',
  templateUrl: './rprofile.component.html',
  styleUrls: ['./rprofile.component.css']
})
export class RprofileComponent {
  // constructor used to specify the name of the router to be used in the function
  constructor(
    private router: Router,
    private fb:FormBuilder
    ){
      
    }

  openHom(){
    this.router.navigate([''])
  }

  // profileForm =new FormGroup({
  //   // the child controls (the key is what it is regestired under) 
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   // adding nested form ctrl
  //   address: new FormGroup({
  //     country: new FormControl(''),
  //     county: new FormControl(''),
  //     estate: new FormControl('')
  //   })
  // })

  // alternatively
  profileForm = this.fb.group({
    firstName: ['', Validators.required ],
    lastName: (''),
    // adding nested form ctrl
    address: this.fb.group({
      country: ['', Validators.required],
      county: (''),
      estate: ('')
    }),
    aliases:
    this.fb.array([this.fb.control('')])
  })
  // Submit method
  onSubmit(){
    console.log(this.profileForm.value)
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
}
// constructor(private fb:FormBuilder){
//   this.reactiveForm = this.fb.group({
//     firstName:[''],
//     lastName :[''],
//     fandom :[''],
//     bias :[''],
//     email:[''],
//     password:['']
//   })
// }
// combining formbuilder ,formgroup and formcontrol