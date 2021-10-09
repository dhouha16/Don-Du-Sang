import 'package:don_su_sang_app/GlobalVariable.dart';
import 'package:don_su_sang_app/response-page.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class DemandePage extends StatefulWidget {

  @override
  _DemandePageState createState() => _DemandePageState();
}

class _DemandePageState extends State<DemandePage> {
  List<dynamic> listDemande;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Liste des demandes"),),
              body: Center(
                child: this.listDemande==null?CircularProgressIndicator():
                ListView.builder(
                    itemCount:(this.listDemande==null)?0:this.listDemande.length,
                    itemBuilder:(context,index){
                      return Card(
                          color:Colors.redAccent.shade100,
                          child: Padding(
                          padding: const EdgeInsets.all(10),
                      child: Row(
                      children: <Widget>[
                      Container(

                        width:MediaQuery.of(context).size.height*0.15,
                        height:MediaQuery.of(context).size.height*0.15,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child:ClipRRect(
                          borderRadius: BorderRadius.circular(20),
                          child:  Text("   "+this.listDemande[index]['nom'] +" "+this.listDemande[index]['prenom'],style:TextStyle(color:Colors.black54)),

                        ),
                      ),
                        SizedBox(width: 10,),
                        Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            //mainAxisAlignment:MainAxisAlignment.center,
                          children: [

                              Text("description: "+this.listDemande[index]['description'],style:TextStyle(color:Colors.black54, fontSize: 12,
                              fontWeight: FontWeight.w700)),
                          SizedBox(height: 5,),
                          Text("urgent avant :13-06-2021",style:TextStyle(color:Colors.black54, fontSize: 12,
                              fontWeight: FontWeight.w700)),
                            RaisedButton(
                              child: Text("prendre un rendez-vous",style:TextStyle(color:Colors.black54)),

                              onPressed:  (){
                                Navigator.push(
                                    context,
                                    MaterialPageRoute(builder: (context) => ResponsePage()),
                                );
                              },

                            ),
                        ],
                        ),
                      ],
                      ),


                      ),

                      );
                    }),
              ),
    );
  }
  @override
  void initState() {
    // TODO: implement
    //methode qui execute au moment de telechargement de widget
    super.initState();
    loadDemandes();
  }
  void loadDemandes() {
    Uri url=  Uri.parse(GlobalData.host+"/demandeLi");

    http.get(url)
         .then((resp) {
          //a chaque fois vous voulez changer les donne de state on le change dznd la methode  setState
          setState(() {
          this.listDemande=json.decode(resp.body);
          });
      
    }).catchError((err){
      print(err);
    });
  }
  /*void loadDemandePer(personne){
    String url=personne['_links']['personne']['href'];
    String s=personne['date_debut'];
    print(url);
    print(s);
  }*/

}
