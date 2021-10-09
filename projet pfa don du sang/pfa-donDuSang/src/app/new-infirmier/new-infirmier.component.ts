import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Infirmier } from '../model/infirmier.model';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-new-infirmier',
  templateUrl: './new-infirmier.component.html',
  styleUrls: ['./new-infirmier.component.css']
})
export class NewInfirmierComponent implements OnInit {
  private currentInfirmier:Infirmier;
  private mode:number=1;
  isConnecter1 = false;
  constructor(private personneService:PersonneService,private router:Router) { }


  ngOnInit() {
    this.connect();
  }
  onSavePErsonne(data:any){
    this.personneService.saveResource("http://localhost:8081/infirmiers",data)
    .subscribe(res=>{
      this.router.navigateByUrl("/infirmier")
      console.log(res)
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
