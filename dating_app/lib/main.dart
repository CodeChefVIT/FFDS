import 'package:dating_app/chatscreen.dart';
import 'package:flutter/material.dart';
import 'constants.dart';
import 'login.dart';
import 'profile 1 screen.dart';
import 'profile 2 screen.dart';
import 'chatscreen2.dart';
import 'matches screen.dart';

import 'registration.dart';


void main() => runApp(DatingApp());

class DatingApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute:LoginScreen.id,
      routes: {
        LoginScreen.id:(context)=>LoginScreen(),
        RegScreen.id:(context)=>RegScreen(),

        ProfileScreen.id:(context)=>ProfileScreen(),
      },
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
    );
  }
}
