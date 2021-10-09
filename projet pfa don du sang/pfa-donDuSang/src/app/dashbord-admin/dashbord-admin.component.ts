import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-dashbord-admin',
  templateUrl: './dashbord-admin.component.html',
  styleUrls: ['./dashbord-admin.component.css']
})
export class DashbordAdminComponent implements OnInit {

  isConnecter1 = false;
  constructor(private router: Router, private auth: PersonneService) { }

  ngOnInit() {
    this.connect();
  }

  connect() {
    this.isConnecter1 = this.auth.isconnecter();
    console.log(this.auth.isconnecter()+"hhhhhhh");
  }

  deconnect() {
    localStorage.setItem('connecter', "false");
  }
}
