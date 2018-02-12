import {Component, OnInit} from '@angular/core';
import { TestRestService} from './test-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'identifiquese';
  constructor(private testRestService: TestRestService){
  }
  miVariable: any;
  // lo implemente en el componente
  ngOnInit(){
    this.testRestService.miMethodo()
      .subscribe(
        NoSeQueLlega=>{this.miVariable=NoSeQueLlega}
      );
  }

}
