import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { analyse } from '../model/analyse.model';
import { response } from '../model/response.model';

import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-addanalyse',
  templateUrl: './addanalyse.component.html',
  styleUrls: ['./addanalyse.component.css']
})
export class AddanalyseComponent implements OnInit {
  analyse: analyse;
  donneur: any;
  private url:string;
  response:any

  constructor(private route: ActivatedRoute,
    private router: Router,
    private personneService: PersonneService) {
      this.analyse = new analyse();
     }

  ngOnInit(): void {
  //  this.listProductCategories();
  this.url=this.route.snapshot.params.id;
  console.log(this.url)
  this.personneService.getResourceAnalyse(this.url)
  .subscribe(data=>{
    this.response=data
   },err=>{
     console.log("erreur");
    })
  }

  onSubmit(data:any){
    this.personneService.save("http://localhost:8081/analyseSave/"+data.response.id,data).subscribe(
      result => this.gotoProductList()
    );
  }

  gotoProductList(): void {
   this.router.navigate(['/analyse']);
  }

  listProductCategories() {
    this.personneService.getProductCategories().subscribe(
      data => {
        console.log('Categories' + JSON.stringify(data));
        this.donneur = data;
      }
    );

}
}
