import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
    public personne;
    public size:number=5;
    public currentPage:number=0;
    public totlaPages:number;
    public pages:Array<number>;
    currentKeyword:string="";
  constructor(private personneService:PersonneService, private router:Router) { }
  isConnecter1 = false;
  ngOnInit() {
    this.connect();
  }

  onGetPersonne(){
    
    this.personneService.getPersonne(this.currentPage,this.size)
    .subscribe(data=>{
     /*on prepare les donnée puis on affiche a l'aide this.persone=data*/
      this.totlaPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totlaPages);
      this.personne=data; 
    },err=>{
      console.log("erreur");
    })
  }
  
  onPagePersonne(i){
    this.currentPage=i;
    this.ChercherPersonne();
  }
  /*on fait cette methode pour retourner chaque on clicke sur le bouton rechecher a la page 0*/
  onChercher(form:any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.ChercherPersonne();
  }
  ChercherPersonne(){
    
    this.personneService.getPersonneByKeyWord( this.currentKeyword,this.currentPage,this.size)
    .subscribe(data=>{
     /*on prepare les donnée puis on affiche a l'aide this.persone=data*/
      this.totlaPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totlaPages);
      this.personne=data; 
    },err=>{
      console.log("erreur");
    })
  }
  onDelete(p){
    let conf=confirm("etre vous sure ?")
    if (conf)
    this.personneService.supprimerResource(p._links.self.href)
    .subscribe(data=>{
      this.ChercherPersonne();
      this.onGetPersonne() 
     },err=>{
       console.log("erreur");
     })
  }
  /*btoa pour encoder l'url base 64*/
  onEditPersonne(p){
    let url=p._links.self.href;
    this.router.navigateByUrl("/edit-personne/"+btoa(url));
  }
  connect() {
    this.isConnecter1 = this.personneService.isconnecter();
    console.log(this.personneService.isconnecter());
  }

  deconnect() {
    localStorage.setItem('connecter', "false");
  }

}
