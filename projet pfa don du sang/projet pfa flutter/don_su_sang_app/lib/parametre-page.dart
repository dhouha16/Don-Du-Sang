import 'package:flutter/material.dart';
class ParametrePage extends StatefulWidget {
  @override
  _ParametrePageState createState() => _ParametrePageState();
}

class _ParametrePageState extends State<ParametrePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Paramatre"),),
      body: Center(
        child: Text("liste des parametre..."),
      ),
    );
  }
}
