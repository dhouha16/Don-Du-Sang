import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne.model';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {
  private currentPersonne:Personne
  private url:string;

  constructor(private router:Router,private activatedRoute:ActivatedRoute, private personneService:PersonneService) { }
/*execute tant que le composant est chargé
atob descode l'url base 64*/
  ngOnInit() {
    this.url=atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url)
    this.personneService.getResource(this.url)
    .subscribe(data=>{
      this.currentPersonne=data
     },err=>{
       console.log("erreur");
      })
  }
  onUpdatePErsonne(value:any){
    this.personneService.updateResource(this.url, value)
    .subscribe(data=>{
        alert("mise à jour effectuée avec succés")
        this.router.navigateByUrl("/Personne")
     },err=>{
       console.log("erreur");
      })
  }
}
