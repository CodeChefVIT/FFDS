import 'package:flutter/material.dart';
import 'constants.dart';
class RegScreen extends StatefulWidget {
  @override
  _RegScreenState createState() => _RegScreenState();
}

class _RegScreenState extends State<RegScreen> {
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
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children:<Widget>[
                  Text('Holla!',
                    style:kTextStyle,
                  ),
                    Text('Welcome to FFDS!',
                      style: kTextStyle,
                    ),
                    SizedBox(
                      height: 10.0,
                    ),
                    Container(
                      child: Text('Please enter the required fields inorder to proceed.',
                        style: kSubTitleStyle,),
                    ),
                    SizedBox(
                      height: 30.0,
                    ),
                    Container(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Text('Email address',
                            style: kTextFieldStyle,),
                          Container(
                            child: TextField(
                              decoration: InputDecoration(

                              ),
                            ),
                          ),
                          SizedBox(
                            height: 5.0,
                          ),
                          Text('Password',
                            style: kTextFieldStyle,),
                          TextField(
                              decoration: InputDecoration(
                                suffixIcon: Icon(Icons.visibility_off),
                              ),
                            ),

                          SizedBox(
                            height: 5.0,
                          ),
                          Text('Confirm Password',
                            style: kTextFieldStyle,
                          ),
                          TextField(
                            decoration: InputDecoration(
                                  suffixIcon: Icon(Icons.visibility_off),
                                ),
                          ),
                          SizedBox(
                            height: 30.0,
                          ),
                          Center(
                            child: Container(
                              decoration: BoxDecoration(borderRadius: BorderRadius.circular(10.0),
                                border: Border.all(
                                  color: kbuttonColour,
                                ),
                              ),
                              child:MaterialButton(
                                onPressed: (){},
                                height: 42.0,
                                minWidth: 220.0,

                                    child: Text('CONTINUE',
                                    style:TextStyle(
                                      color: kbuttonColour,
                                      fontSize: 18.0,
                                    ),),
                                  ),
                                ),
                          ),
                          SizedBox(
                            height: 10.0,
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
                              Text('Already have an account?',
                                style: kSmallStyle,),
                              GestureDetector(
                                onTap: (){
                                  Navigator.pop(context);
                                },
                                child: Text('Login',
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
