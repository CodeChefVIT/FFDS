import 'package:dating_app/constants.dart';
import 'package:flutter/cupertino.dart';

import 'registration.dart';
import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
      appBar: AppBar(
        backgroundColor: kbackColour,
          title:Center(
            child: Container(
              height: 150.0,
                width: 100.0,
              child: Image.asset('images/Icon1.png'),),
          ),
      ),


        body: Column(
        mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Expanded(
              child: Container(
                margin: EdgeInsets.symmetric(vertical: 20.0,horizontal: 44.0),
                child: Column(
                  children:<Widget>[ Flexible(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children:<Widget>[Flexible(
                       child: Text('Hey!',
                        style:kTextStyle,
                      ),
                      ),
                        Text('WelcomeBack!',
                          style: kTextStyle,
                        ),
                        SizedBox(
                          height: 10.0,
                        ),
                        Container(
                          child: Text('Please enter the required fields inorder to proceed.',
                          style: kSubTitleStyle,),
                        ),

                        ],
                    ),
                  ),
                    SizedBox(
                      height: 50.0,
                    ),

                      Container(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                              Text('Email address',
                              style: kTextFieldStyle,),
                                    Container(
                                      child:
                                        TextField(
                                          decoration: InputDecoration(

                                          ),
                                   ),

                                    ),
                              SizedBox(
                                height: 15.0,
                              ),
                              Text('Password',
                              style: kTextFieldStyle,),
                              TextField(
                                decoration: InputDecoration(
                                  suffixIcon: Icon(Icons.visibility_off),
                                ),
                              ),
                              SizedBox(
                                height: 7.0,
                              ),
                              Container(child: Row(
                                mainAxisAlignment: MainAxisAlignment.end,
                                children: <Widget>[
                                  GestureDetector(onTap: (){}, child: Icon(Icons.check_box_outline_blank,color: kbuttonColour,),),
                                Text('Save Password',
                                style: kSmallPinkStyle,)
                                ],
                              ),),
                              SizedBox(
                                height: 40.0,
                              ),
                              Center(
                                  child:GestureDetector(


                                   onTap: (){},
                                    child: Container(
                                      padding: EdgeInsets.all(10.0),
                                      width: 220.0,
                                      height: 47.0,
                                      decoration: BoxDecoration(borderRadius: BorderRadius.circular(10.0),
                                          color: kbuttonColour),
                                      child:Center(
                                        child: Text('LOGIN',
                                          style: TextStyle(
                                          fontSize: 18.0,),
                                  ),
                                      ),
                                  ),
                                ),
                              ),
                            SizedBox(
                                height: 20.0,
                              ),
                            Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                              Container(
                                height: 2.0,
                                width:120.0,
                                color: kTextColour,

                              ),
                              SizedBox(
                                width: 5.0,
                              ),
                              Text('or',
                                style: kSmallStyle,
                              ),
                              SizedBox(
                                width: 5.0,
                              ),
                              Container(
                                height: 2.0,
                                width:120.0,
                                  color: kTextColour,

                              ),
                                ],
                              ),
                                SizedBox(
                                height: 20.0,
                              ),
                            Row(
                               mainAxisAlignment: MainAxisAlignment.center,
                               children: <Widget>[
                              Text('New User?',
                              style: kSmallStyle,),
                              GestureDetector(
                                onTap: (){
                                  Navigator.push(context,MaterialPageRoute(builder:(context)=>RegScreen()),);
                                },
                                child: Text('Create New Account',
                                style: kSmallPinkStyle,),
                              )
                                ],
                              ),



                            ],
                          ),
                        ),


        ],
                ),

                    ),
            ),
                  ],
                ),
        bottomNavigationBar: Row(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('Made by CodeChef VIT',style: kSmallStyle,),
          ],
        ),
              ),
            );





  }
}
