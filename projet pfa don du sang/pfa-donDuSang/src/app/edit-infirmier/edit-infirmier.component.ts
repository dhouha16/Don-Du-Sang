import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Infirmier } from '../model/infirmier.model';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-edit-infirmier',
  templateUrl: './edit-infirmier.component.html',
  styleUrls: ['./edit-infirmier.component.css']
})
export class EditInfirmierComponent implements OnInit {
  private currentPersonne:Infirmier
  private url:string;
  constructor(private router:Router,private activatedRoute:ActivatedRoute, private personneService:PersonneService) { }

  ngOnInit() {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhh")
    this.url=atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url)
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhh")
    this.personneService.getResourceInfir(this.url)
    .subscribe(data=>{
      this.currentPersonne=data
     },err=>{
       console.log("erreur");
      })
  }
  onUpdateInfirmier(value:any){
    this.personneService.updateResourceInfir(this.url, value)
    .subscribe(data=>{
        alert("mise à jour effectuée avec succés")
        this.router.navigateByUrl("/infirmier")
     },err=>{
       console.log("erreur");
      })
  }

}
