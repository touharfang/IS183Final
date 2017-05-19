import { Component, OnInit } from '@angular/core';
import { TankService } from '../tank.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css']
})
export class TankComponent implements OnInit {

  tank: Object;

  constructor(
    private tankService: TankService,
    private router:Router,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.tankService.getTankById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        console.log('resp book', resp);
        this.tank = resp;
     });
  }

  updateBook(id, book:Object) {
    console.log('book', book);
    
    this.tankService.updateTank(id, book).then((resp) => {
      console.log('resp', resp);
      if(resp) {
        this.router.navigate(['books']);
      }
    });
  }

}
