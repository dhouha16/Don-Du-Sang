import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
class PersonnePage extends StatefulWidget {

  @override
  _PersonnePageState createState() => _PersonnePageState();
}

class _PersonnePageState extends State<PersonnePage> {
  List<dynamic> listPersonne;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("acceuil"),),
      body: Center(


            // child: if ((this.listPersonne)['index']['demandes']!=null)

        child: this.listPersonne==null?CircularProgressIndicator():
        ListView.builder(

            itemCount:(this.listPersonne==null)?0:this.listPersonne.length,
            itemBuilder:(context,index){
             // if ((this.listPersonne)[index]['demandes']!=null){

              return Card(
                color:Colors.redAccent.shade100,
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    children: <Widget>[
                      Container(
                        child: Padding(
                        padding: const EdgeInsets.all(8.0),

                          child: RaisedButton(
                          child: Text(this.listPersonne[index]['nom'],style:TextStyle(color:Colors.black54)),
                          onPressed:  (){
                            loadDemandePersonne(this.listPersonne[index]);
                          },
                        ),
                     ),
                      ),
                      Row(
                          children: <Widget>[
                            Text('date',style:TextStyle(color:Colors.black54)),
                            Column(
                                children: <Widget>[
                                  ...( this.listPersonne[index]['demande'] as List<dynamic>).map((demande){
                                    return RaisedButton(
                                    child: Text("${demande['description']}"),
                                      onPressed: (){},
                                    );
                                  })
                                  ],

                            )
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
    Uri url=  Uri.parse("http://20.20.0.134:8081/personnes");

    http.get(url)
        .then((resp) {
      //a chaque fois vous voulez changer les donne de state on le change dznd la methode  setState
      setState(() {
        this.listPersonne=json.decode(resp.body)['_embedded']['personnes'];
      });

    }).catchError((err){
      print(err);
    });
  }
  void loadDemandePersonne(personne){
    String url=personne['_links']['demande']['href'];

    print(url);
    Uri url1=  Uri.parse(url);

    http.get(url1)
        .then((resp) {
      //a chaque fois vous voulez changer les donne de state on le change dznd la methode  setState
      setState(() {
        personne['demandes']=json.decode(resp.body)['_embedded']['demandes'];
        print(personne['demandes']['description']);
      });
    }).catchError((err){
      print(err);
    });
  }

}
