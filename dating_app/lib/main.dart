import 'package:flutter/material.dart';
import 'constants.dart';
import 'login.dart';

import 'registration.dart';

void main() => runApp(DatingApp());

class DatingApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark().copyWith(
        accentColor: kbuttonColour,
        scaffoldBackgroundColor: kbackColour,
        primaryTextTheme: TextTheme(
          title: TextStyle(
                fontFamily: 'CircularStd',
                fontSize: 38.0,
                fontWeight: FontWeight.normal,
                color: Color(0xFFFFFFFF),

          ),
        ),


      ),
      home: LoginScreen(),
    );
  }
}
