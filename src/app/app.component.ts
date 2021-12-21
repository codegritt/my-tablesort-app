import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './data.service';
import{MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  service: any;
  profileForm: any;
  listData: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  displayedColumns = ['id','first_name','last_name','email','Action'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild('paginator') paginator! : MatPaginator; 
  @ViewChild(MatSort) matSort! : MatSort;

  
  constructor(private dialogRef : MatDialog,service: DataService){}

  openDialog(){
    
    this.dialogRef.open(PopUpComponent,{
      
      data:{
        first_Name:[''],
        last_Name:[''],
        email:[''],
      }
      });

    }
    saveForm(){
      console.log('Form data is ', this.profileForm.value);
    }
   
  

  ngOnInit() {
    this.service.getUserData().subscribe((response:any) =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }
onRemove(index:number){
  console.log(index);
  this.dataSource.data.splice(index,1);
  this.dataSource.filter="";
}
 


}
