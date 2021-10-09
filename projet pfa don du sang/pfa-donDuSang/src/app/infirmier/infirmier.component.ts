import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {
  public infirmier;
  currentKeyword:string="";
  constructor(private personneService:PersonneService, private router:Router) { }
  isConnecter1 = false;
  ngOnInit() {
    this.connect();
  }

  onGetInfirmier(){
    this.personneService.getInfirmiers()
    .subscribe(data=>{
      this.infirmier=data;    
     },err=>{
       console.log("erreur");
     })
  }
  onEditInfirmier(p){
    let url=p._links.self.href;
    this.router.navigateByUrl("/edit-infirmier/"+btoa(url));
  }
  onDelete(p){
    let conf=confirm("etre vous sure ?")
    if (conf)
    this.personneService.supprimerResource(p._links.self.href)
    .subscribe(data=>{
     
      this.onGetInfirmier() 
     },err=>{
       console.log("erreur");
     })
  }
  

  connect() {
    this.isConnecter1 = this.personneService.isconnecter();
    console.log(this.personneService.isconnecter());
  }

  deconnect() {
    localStorage.setItem('connecter', "false");
  }
}
