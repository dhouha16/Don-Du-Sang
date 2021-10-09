import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  isConnecter = false;
  constructor(private router: Router, private auth: PersonneService) { }

  ngOnInit() {
    this.connect();
  }

  connect() {
    this.isConnecter = this.auth.isconnecter();
    console.log(this.auth.isconnecter()+"hhhhhhh");
  }

  deconnect() {
    localStorage.setItem('connecter', "false");
  }
}
