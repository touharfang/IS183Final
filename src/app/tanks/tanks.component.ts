import { Component, OnInit } from '@angular/core';
import { TankService } from './tank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})

export class TanksComponent implements OnInit {

  tanks:Array<Object>;

  constructor(
    private bookService: TankService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.tanks = [];
    console.log('tanks', this.tanks);
  }

  goToCreate() {
     console.log('go to create....;');
    this.router.navigate(['tank-create']);
  }

}
