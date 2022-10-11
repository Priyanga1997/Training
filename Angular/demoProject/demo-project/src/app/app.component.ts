import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    //this.http.get("https://localhost:44319/api/home/get-images").subscribe(res => this.SuccessGet(res), res => console.log(res));
  }
  // SuccessGet(input:any){
  //   this.images=input;
  // }
  // uploadFile(files:any){
  //   if(files.length==0){
  //     return ;
  //   }
  //   let fileToUpload=<File>files[0];
  //   const formData=new FormData();
  //   formData.append('file',fileToUpload,fileToUpload.name);
  //   this.http.post('https://localhost:44319/api/home/',formData).subscribe(res=>console.log(res),res=>console.log(res));
  // }
  }

