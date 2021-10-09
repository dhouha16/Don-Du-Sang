import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPersonneComponent } from './new-personne/new-personne.component';
import { EditPersonneComponent } from './edit-personne/edit-personne.component';
import { PersonneComponent } from './personne/personne.component';
import { IndexComponent } from './index/index.component';
import { ResponseComponent } from './response/response.component';
import { DemandesComponent } from './demandes/demandes.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { AddanalyseComponent } from './addanalyse/addanalyse.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { NewInfirmierComponent } from './new-infirmier/new-infirmier.component';



const routes: Routes = [{path:"personne",component:PersonneComponent},
{path:"new-personne",component:NewPersonneComponent},
{path:"edit-personne/:id",component:EditPersonneComponent},
{path:"index",component:IndexComponent},
{path:"response",component:ResponseComponent},
{path:"demandes",component:DemandesComponent},
{path:"login",component:LoginComponent},
{path:"loginAdmin",component:LoginAdminComponent},
{path:"analyse",component:AnalyseComponent},
{path:"new-analyse",component:AddanalyseComponent},
{path:"dashbordAdmin",component:DashbordAdminComponent},
{path:"dashbord",component:DashbordComponent},
{path:"infirmier",component:InfirmierComponent},
{path:"edit-infirmier/:id",component:InfirmierComponent},
{path:"new-infirmier",component:NewInfirmierComponent},

{path:"",redirectTo:"/index" ,pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
