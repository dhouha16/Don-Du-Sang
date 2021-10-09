import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { analyse } from '../model/analyse.model';
import { Infirmier } from '../model/infirmier.model';
import { Personne } from '../model/personne.model';
import { response } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  public host:string="http://localhost:8081";
  constructor(private httpCient:HttpClient) { }

  public getPersonne(page:number,size:number){
    return this.httpCient.get(this.host+"/personnes?page="+page+"&size="+size)
  }
  public getPersonneByKeyWord(mc:string,page:number,size:number){
    return this.httpCient.get(this.host+"/personnes/search/ByCinPage?mc="+mc+"&page="+page+"&size="+size)
  }
  public supprimerResource(url){
    return this.httpCient.delete(url)
  }
  public saveResource(url,data):Observable<Personne>{
    return this.httpCient.post<Personne>(url,data)
  }
  public getResource(url):Observable<Personne>{
    return this.httpCient.get<Personne>(url)
  }
  public updateResource(url,data){
    return this.httpCient.put(url,data);
  }
  public getDemande(){
    return this.httpCient.get(this.host+"/demandeLi")
  }
  public getResponse(){
    return this.httpCient.get(this.host+"/responseLi")
  }
  public getInfirmier(){
    return this.httpCient.get(this.host+"/getInfirmier")
  }
 
  public getanalyse(){
    return this.httpCient.get(this.host+"/getAnalysee")
  }
  public getResourceAnalyse(url):Observable<response>{
    return this.httpCient.get<response>(url)
  }
  public postAnalyse(url,data){
    return this.httpCient.post(url,data);
  }
  public save(url,data){
    return this.httpCient.post<analyse>(url,data);
  }
  getProductCategories() {
    return this.httpCient.get("http://localhost:8081/responseLi");
   }

   public getInfirmiers(){
    return this.httpCient.get(this.host+"/infirmiers")
  }

  public supprimerResourceInfir(url){
    return this.httpCient.delete(url)
  }
  public saveResourceInfir(url,data):Observable<Infirmier>{
    return this.httpCient.post<Infirmier>(url,data)
  }
  public getResourceInfir(url):Observable<Infirmier>{
    return this.httpCient.get<Infirmier>(url)
  }
  public updateResourceInfir(url,data){
    return this.httpCient.put(url,data);
  }

  isconnecter() {
    return (localStorage.getItem('connecter') == "true" ? true : false);
  }
}
