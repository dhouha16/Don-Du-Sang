import { response } from "./response.model";

export class demande{
    id:number;
    cin:string;
    nom:string;
    prenom:string;
    date_naissance:Date
    email:string;
    password:string;
    telephone:string;
    typesang:string;
    sexe:string;
    description:String;
    responses:any[];

}