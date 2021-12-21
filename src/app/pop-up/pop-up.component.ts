import { Component} from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent  {
listData:any;

  constructor(private formBuilder:FormBuilder){}

   profileForm = this.formBuilder.group({
    
    firstName:[''],
    lastName:[''],
    gender:['']
    
  });
 
  saveForm(){
    
    console.log('Form data is ', this.profileForm.value);
  }
 public addItem():void{
   this.listData.push(this.profileForm.value);
   this.profileForm.reset();
 }

 ngOnInit(){
   
 }
 }
