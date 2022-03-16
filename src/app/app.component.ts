import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  /*Ng Control
  name: string = ''
  lastName: string = ''
  email: string = ''*/

  /* Form Control
  name: FormControl = new FormControl('')
  lastName: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  sex: FormControl = new FormControl('')*/

  personalData: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    sex: new FormControl('')
  })

  constructor (
    private snack: MatSnackBar
  ){}
  
  submit(): void {
    /*console.log(`Name = ${this.name.value}`)
    console.log(`Lastname = ${this.lastName.value}`)
    console.log(`email = ${this.email.value}`)
    console.log(`Sexo = ${this.sex.value}`)*/

    console.log(`Name = ${this.personalData.controls['name'].value}`)
    console.log(`lastName = ${this.personalData.controls['lastName'].value}`)
    console.log(`e-mail = ${this.personalData.controls['email'].value}`)
    console.log(`sex = ${this.personalData.controls['sex'].value}`)

    this.snack.open('Você foi cadastrado' , 'ok' , {duration: 3000})
  }

}
