import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../service/personne.service';
import { Infirmier } from '../model/infirmier.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashbordComponent } from '../dashbord/dashbord.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private currentInfirmier:Infirmier;
  loginForm: FormGroup;
 
 

  constructor(private personneService:PersonneService,private router:Router,private formBuilder: FormBuilder, private dash:DashbordComponent) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern('^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$'),
        Validators.required])],
      password: ['', Validators.required],

    })
   }
  ngOnInit() {
  }
  getLogin() {
    this.personneService.getInfirmier().subscribe((res: any) => {
    
      res.forEach((element: any) => {
        if (element.email == this.loginForm.get('email').value &&
        element.password == this.loginForm.get('password').value) {
          console.log("hhhhhhhhhhhj")
          localStorage.setItem('connecter', 'true');
         this.dash.connect;
         this.router.navigate(["/dashbord"])
       } else {
        }
      });
    });
  }

}
