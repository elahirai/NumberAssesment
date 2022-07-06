import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public responseArray : any[] = [];
  selectedDesign: any = '';
  bordered: boolean = false;
  simple: boolean = false;
  constructor(private router: Router) {
    console.log(this.router?.getCurrentNavigation()?.extras.state); // should log out 'bar'
    var responseStaus = this.router?.getCurrentNavigation()?.extras.state?.['res'].statusResponse;

    responseStaus.forEach((el : any )=> {
      this.responseArray.push(el);
    });
    
  }

  ngOnInit(): void {
  }

  changeDesign(){
    console.log(this.selectedDesign)
    if(this.selectedDesign === "bordered"){
      this.bordered = true;
      this.simple = false;
    }else if(this.selectedDesign === "simple"){
      this.bordered = false
      this.simple = true
    }
    else{
      this.bordered = false;
      this.simple = false
    }

  }
}
