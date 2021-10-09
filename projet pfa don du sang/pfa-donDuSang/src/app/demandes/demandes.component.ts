import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  public demandes :any;
  isConnecter = false;
  constructor(private personneService:PersonneService, private router:Router) { }

  ngOnInit() {
    this.connect();
  }
  onGetdemande(){
    
    this.personneService.getDemande()
    .subscribe(data=>{
      //this.router.navigateByUrl("/personne")
      this.demandes=data;
     
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
