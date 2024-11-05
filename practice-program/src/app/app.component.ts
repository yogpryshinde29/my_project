import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practice-program';
  str:any = [];
  dupstr:any =[];
  isduplicate:boolean = false;

  ngOnInit(){
    this.str = ['orange', 'apple', 'orange'];
   
        for (let i = 0; i < this.str.length; i++) {
          this.isduplicate = false;
          for (let j = 0; j < this.dupstr.length; j++) {
            if (this.str[i] == this.dupstr[j]) {
              this.isduplicate = true;
              break;
            }
          }
          if (!this.isduplicate) {
            this.dupstr.push(this.str[i]);
          }
        }
    console.log(this.dupstr);
    
  }
  
}
