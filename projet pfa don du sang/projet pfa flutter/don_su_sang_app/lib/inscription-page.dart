import 'dart:developer';

import 'package:don_su_sang_app/GlobalVariable.dart';
import 'package:don_su_sang_app/model.dart';
import 'package:don_su_sang_app/my_data.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:io';
import 'package:intl/intl.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'dart:async';

class InscriptionPage extends StatefulWidget {

  @override
  _InscriptionPageState createState() => _InscriptionPageState();
}


class _InscriptionPageState extends State<InscriptionPage> {
  hexColor(String colorhexcode){
    String colornew="0xff"+colorhexcode;
    colornew=colornew.replaceAll('#', '');
    int colorint=int.parse(colornew);
    return colorint;
  }

  //static DateTime parse(String formattedString);
  @override
  void dispose() {
    // Clean up the controller when the widget is removed
    txtdate.dispose();
    super.dispose();
  }
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Stack(children: [
        ShaderMask(
        shaderCallback: (rect) => LinearGradient(
      begin: Alignment.bottomCenter,
      end: Alignment.center,
      colors: [Colors.black54, Colors.transparent],
    ).createShader(rect),
    blendMode: BlendMode.darken,
    child: Container(
    decoration: BoxDecoration(
    image: DecorationImage(
    image: AssetImage("images/pp.jpg"),
    fit: BoxFit.none,
    colorFilter:
    ColorFilter.mode(Colors.black54, BlendMode.darken)))),
    ),
      Scaffold(

        body: SafeArea(
          bottom: false,
          child: Container(
            padding: EdgeInsets.only(left: 15, right: 15),
            height: double.infinity,
            width: double.infinity,

            child: SingleChildScrollView(
                padding: EdgeInsets.only(bottom: 15),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    SizedBox(
                      height: 200.0,
                    ),
                    Card(
                      elevation: 8.0,
                      child: Container(
                        padding: EdgeInsets.all(10.0),
                        child: Column(
                          children: <Widget>[
                            TextField(
                              controller: txtNom,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.person),
                                labelText: "nom",
                              ),
                            ),
                            SizedBox(
                              height: 15.0,
                            ),
                            TextField(
                              controller: txtPrenom,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.person),
                                labelText: "prenom",
                              ),
                            ),
                            SizedBox(
                              height: 15.0,
                            ),
                            TextField(
                              controller: txtPassword,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.lock),
                                labelText: "Password",
                              ),
                              obscureText: true,

                            ),
                            SizedBox(
                              height: 15.0,
                            ),
///////////////////////////////////////////////


                            TextField(
                              readOnly: true,
                              controller: txtdate,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.date_range),
                                labelText: "date de naissance",
                              ),
                              onTap: () async {
                                var date =  await showDatePicker(
                                    context: context,
                                    initialDate:DateTime.now(),
                                    firstDate:DateTime(1900),
                                    lastDate: DateTime(2100));
                               txtdate.text = date.toString().substring(0,10);
                              },),
                            SizedBox(
                              height: 15.0,
                            ),


                          ////////////////////////////////////////////////

                             TextField(
                              controller: txtemail,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.email_outlined),
                                labelText: "Email",
                              ),
                            ),
                            SizedBox(
                              height: 15.0,
                            ),
                            TextField(
                              controller: txtTelephone,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.phone),
                                labelText: "Numero de telephone",
                              ),
                              keyboardType: TextInputType.phone,
                            ),
                            SizedBox(
                              height: 15.0,
                            ),

                            TextField(
                              controller: txtCin,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.person_pin),
                                labelText: "cin",
                              ),
                              keyboardType: TextInputType.number,
                            ),
                            SizedBox(
                              height: 15.0,
                            ),

                            TextField(
                              controller: txtsexe,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.perm_contact_calendar_outlined),
                                labelText: "sexe",
                              ),
                            ),
                            SizedBox(
                              height: 15.0,
                            ),
                            TextField(
                              controller: typeSang,
                              decoration: InputDecoration(
                                prefixIcon: Icon(Icons.perm_contact_calendar_outlined),
                                labelText: "type de sang",
                              ),
                            ),
                            SizedBox(
                              height: 15.0,
                            ),

                            MaterialButton(
                                height: 50.0,
                                elevation: 5,
                                minWidth: 300,
                                color: Colors.red.shade900,
                                onPressed: ()async {

                                  Personne obj=Personne(cin:int.parse(txtCin.text.trim()),
                                      nom: txtNom.text.trim(),
                                      prenom: txtPrenom.text.trim(),
                                     dateNaissance: DateFormat('dd-mm-yy'). parse (txtdate.text.trim()),
                                      //dateNaissance:null,
                                      email: txtemail.text.trim(),
                                      password: txtPassword.text.trim(),
                                      telephone: txtTelephone.text.trim(),
                                      sexe: txtsexe.text.trim());
                                  var body=json.encode(obj.toJson());
                                  obj=await insertPersonne(body);
                                  setState(() {
                                    dynamic result;
                                    if(obj!=null){
                                       result  = obj.cin.toString()+'\n'+obj.nom+'\n'+obj.prenom+
                                    '\n'+obj.email+'\n'+obj.password+'\n'+obj.telephone+'\n'+obj.sexe;
                                    }else
                                      result='on ne peut pas completer';
                                  });
                                },
                                shape: RoundedRectangleBorder(
                                  borderRadius: new BorderRadius.circular(30.0),
                                ),
                               // color: Theme.of(context).primaryColor,
                                disabledColor: Theme.of(context)
                                    .primaryColor
                                    .withOpacity(0.50),
                                disabledElevation: 0,
                                child: Text('SIGN IN',
                                  textAlign: TextAlign.center, style: TextStyle(color: Colors.white),))
                          ],
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 25.0,
                    ),
                    Row(
                      children: <Widget>[
                        Expanded(child: Text("Don't Have a Account?")),
                        Text("Sign Up",
                            style: TextStyle(
                              color: Colors.blue,
                            )),
                      ],
                    ),
                    SizedBox(
                      height: 50.0,
                    ),
                    Align(
                      alignment: Alignment.bottomCenter,
                      child: Row(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
                        Text(
                          'New to App?',
                          style: TextStyle(color: Colors.black87),
                        ),
                        SizedBox(
                          width: 5,
                        ),
                        GestureDetector(
                          onTap: () {
                          },
                          child: Text(
                              "REGISTER", style: TextStyle(
                            color: Colors.blue,
                          )
                          ),
                        ),
                      ]),
                    )
                  ],
                )),
          ),
        ),

                ),
               ] );
  }
  Future<Personne> insertPersonne(String body)async{
    final api=Uri.parse(GlobalData.host+"/personnes");
    var response=await http.post(api,body: body,headers: {'content-type':'application/hal+json'});
    if(response.body==201){
      return Personne.fromJson(json.decode(response.body));
    }else
      return null;
  }
}

