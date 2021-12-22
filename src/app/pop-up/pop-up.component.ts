import { Component, OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {


listData:any;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

   profileForm = this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    gender:['',Validators.required]
    
  });
  
  saveForm(){
    
    console.log('Form data is ', this.profileForm.value);
  }
  public addItem():void{
    this.listData.push(this.profileForm.value);
    this.profileForm.reset();
  }

 
 }
