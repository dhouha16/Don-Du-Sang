import 'package:don_su_sang_app/GlobalVariable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class AuthentificationPage extends StatefulWidget {

  @override
  _AuthentificationPageState createState() => _AuthentificationPageState();
}

class _AuthentificationPageState extends State<AuthentificationPage> {
  hexColor(String colorhexcode){
    String colornew="0xff"+colorhexcode;
    colornew=colornew.replaceAll('#', '');
    int colorint=int.parse(colornew);
    return colorint;
  }
  List<dynamic> listDemande;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
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
        backgroundColor: Colors.transparent,
        body: Column(
          children: [
            Flexible(
              child: Padding(
                padding:
                const EdgeInsets.symmetric(vertical: 30, horizontal: 50),
                child: Text(
                  "don du sang",
                  style: TextStyle(
                      color: Color(hexColor('#8B0000')),
                      fontSize: 60,
                      fontFamily: 'cursive',
                      fontWeight: FontWeight.w900),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10.0),
              child: Container(
                height: size.height * 0.08,
                width: size.width * 0.8,
                decoration: BoxDecoration(
                  color: Colors.grey[500].withOpacity(0.5),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: TextField(
                  //controller: txtlogin,
                  decoration: InputDecoration(
                      border: InputBorder.none,
                      prefixIcon: Padding(
                        padding: const EdgeInsets.symmetric(vertical: 10.0,horizontal: 20.0),
                        child: Icon(
                          Icons.person_outlined,
                          size: 30,
                          color: Color(hexColor('#8B0000')),
                        ),
                      ),
                      hintText: 'donner votre email',
                      hintStyle:TextStyle(fontSize: 14.0, color: Colors.white)
                  ),
                  //style: KBodyText,

                  keyboardType: TextInputType.text,
                  textInputAction: TextInputAction.next,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20.0),
              child: Container(
                height: size.height * 0.08,
                width: size.width * 0.8,
                decoration: BoxDecoration(
                  color: Colors.grey[500].withOpacity(0.5),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: TextField(
                  //controller: txtpassword,
                  decoration: InputDecoration(
                      border: InputBorder.none,
                      prefixIcon: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: Icon(
                          Icons.vpn_key_sharp,
                          size: 30,
                          color: Color(hexColor('#8B0000')),
                        ),
                      ),
                      hintText: 'Donner votre mot de passe',
                      hintStyle:TextStyle(fontSize: 14.0, color: Colors.white)
                  ),
                  //style: KBodyText,
                  /*pour rendre le champ invisible (password)*/
                   obscureText: true,
                  keyboardType: TextInputType.visiblePassword,
                  textInputAction: TextInputAction.done,
                ),
              ),
            ),
            SizedBox(
              height: 25,
            ),
            Container(
              height: 70,
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  color: Color(hexColor('#8B0000'))),
              child: FlatButton(
                onPressed: () {},
                child: Text(
                  ("valider"),
                  style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.bold),
                ),
              ),
            ),
            SizedBox(
              height: 25,
            ),
            Column(
              children: [
                Container(
                  child: Text("créer un nouveau compte",style: TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.bold),
                  ),
                  decoration: BoxDecoration(
                      border:
                      Border(bottom: BorderSide(width: 1,color: Colors.white))
                  ),
                ),
                SizedBox(
                  height: 20,
                ),
              ],
            )
          ],
        ),
      ),
    ]);
  }


}
