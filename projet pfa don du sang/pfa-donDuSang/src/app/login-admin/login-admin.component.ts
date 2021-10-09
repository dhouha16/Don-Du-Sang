import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashbordAdminComponent } from '../dashbord-admin/dashbord-admin.component';
import { PersonneService } from '../service/personne.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginForm: FormGroup;
  email:string;
  password:string;
 
 

  constructor(private personneService:PersonneService,private router:Router,private formBuilder: FormBuilder, private dash:DashbordAdminComponent) {
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
    this.email="admin@gmail.com";
    this.password="0000"
     
        if (this.email == this.loginForm.get('email').value &&
        this.password == this.loginForm.get('password').value) {
          console.log("hhhhhhhhhhhj")
          localStorage.setItem('connecter', 'true');
         this.dash.connect;
         this.router.navigate(["/dashbordAdmin"])
       } else {
        }
     
    });
  }

}
