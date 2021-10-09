import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
  public analyse :any;
  isConnecter = false;
  constructor(private personneService:PersonneService, private router:Router) { }

  ngOnInit() {
    this.connect();
  }

  onGetanalyse(){
    
    this.personneService.getanalyse()
    .subscribe(data=>{
      //this.router.navigateByUrl("/personne")
      this.analyse=data;   
     },err=>{
       console.log("erreur");
     })
  }
  connect() {
    this.isConnecter = this.personneService.isconnecter();
    console.log(this.personneService.isconnecter());
  }

  deconnect() {
    localStorage.setItem('connecter', "false");
  }
  
 

}
