import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { NewPersonneComponent } from './new-personne/new-personne.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';
import { ResponseComponent } from './response/response.component';
import { DemandesComponent } from './demandes/demandes.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { AddanalyseComponent } from './addanalyse/addanalyse.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { EditInfirmierComponent } from './edit-infirmier/edit-infirmier.component';
import { NewInfirmierComponent } from './new-infirmier/new-infirmier.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    NewPersonneComponent,
    IndexComponent,
    EditPersonneComponent,
    ResponseComponent,
    DemandesComponent,
    LoginComponent,
    DashbordComponent,
    AnalyseComponent,
    AddanalyseComponent,
    DashbordAdminComponent,
    LoginAdminComponent,
    InfirmierComponent,
    EditInfirmierComponent,
    NewInfirmierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
