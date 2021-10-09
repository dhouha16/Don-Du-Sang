import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  public response :any;
  isConnecter = false;
  constructor(private personneService:PersonneService, private router:Router) { }

  ngOnInit() {
    this.connect();
  }
  onGetResponse(){
    
    this.personneService.getResponse()
    .subscribe(data=>{
      //this.router.navigateByUrl("/personne")
      this.response=data;
     
     },err=>{
       console.log("erreur");
     })
  }
   /*btoa pour encoder l'url base 64*/
   onEditPersonne(p){
    console.log(p.id)
    let url="localhost:8081/responses/"+p.id;
    this.router.navigateByUrl("/new-analyse/"+btoa(url));
  }

  connect() {
    this.isConnecter = this.personneService.isconnecter();
    console.log(this.personneService.isconnecter());
  }

  deconnect() {
    localStorage.setItem('connecter', "false");
  }
}
