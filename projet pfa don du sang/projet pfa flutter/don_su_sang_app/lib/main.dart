import 'package:don_su_sang_app/MenuItem.dart';
import 'package:don_su_sang_app/authentification-page.dart';
import 'package:don_su_sang_app/demande-page.dart';
import 'package:don_su_sang_app/inscription-page.dart';
import 'package:don_su_sang_app/parametre-page.dart';
import 'package:don_su_sang_app/personne-page.dart';
import 'package:flutter/material.dart';

import 'form-date.dart';

void main() => runApp(MaterialApp(
      theme: ThemeData(appBarTheme: AppBarTheme(color: Colors.redAccent.shade200)),
      home: MyApp(),
    ));

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final menus = [
    {'title': 'acceuil', 'icon': Icon(Icons.home), 'page': DemandePage()},
    {'title': 'personne', 'icon': Icon(Icons.home), 'page': PersonnePage()},
    {'title': 'parametre', 'icon': Icon(Icons.settings), 'page': ParametrePage()},
    {'title': 'authentification', 'icon': Icon(Icons.settings), 'page': AuthentificationPage()},
    {'title': 'inscription', 'icon': Icon(Icons.settings), 'page': InscriptionPage()},
    {'title': 'date', 'icon': Icon(Icons.settings), 'page': DatePicker()},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("home page"),
      ),
      body: Center(
        child: Text("home body....."),
      ),
      drawer: Drawer(
        child: ListView(
          children: <Widget>[
            DrawerHeader(
              child: Center(
                child: CircleAvatar(
                  backgroundImage: AssetImage("./images/profil.jpg"),
                  radius: 40,
                ),
              ),
              decoration: BoxDecoration(
                  gradient: LinearGradient(
                      colors: [Colors.redAccent.shade100, Colors.redAccent.shade100])),
            ),
            //... fait une copie de tableaux
            ...this.menus.map((item) {
              return new Column(
                children: <Widget>[
                  Divider(
                    color: Colors.redAccent.shade100,
                  ),
                  MenuItem(item['title'], item['icon'], (context) {
                    Navigator.pop(context);
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => item['page']));
                  })
                ],
              );
            })
          ],
        ),
      ),
    );
  }

}
