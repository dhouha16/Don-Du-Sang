import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../service/personne.service';
import { Router, Routes } from '@angular/router';
import { Personne } from '../model/personne.model';


@Component({
  selector: 'app-new-personne',
  templateUrl: './new-personne.component.html',
  styleUrls: ['./new-personne.component.css']
})
export class NewPersonneComponent implements OnInit {
  
  private currentPersonne:Personne;
  private mode:number=1;
  constructor(private personneService:PersonneService,private router:Router) { }

  ngOnInit() {
  }
  onSavePErsonne(data:any){
    this.personneService.saveResource("http://localhost:8081/personnes",data)
    .subscribe(res=>{
      //this.router.navigateByUrl("/personne")
      this.currentPersonne=res;
      this.mode=2;
      console.log(res)
     },err=>{
       console.log("erreur");
     })
    
  }
  onNewPersonne(){
    this.mode=1;
  }

}
