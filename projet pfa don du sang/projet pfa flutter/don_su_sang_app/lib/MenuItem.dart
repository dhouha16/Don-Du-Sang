import 'package:flutter/material.dart';
class MenuItem extends StatelessWidget {
  String menuTitle;
  Icon menuIcom;
  Function Handler;


  MenuItem(this.menuTitle,this.menuIcom,this.Handler);
  @override
  Widget build(BuildContext context) {
    return
      ListTile(
        title: Text(menuTitle),
        leading: menuIcom,
        trailing: Icon(Icons.arrow_right),
        onTap: (){
          this.Handler(context);
        },
      );
  }
}
