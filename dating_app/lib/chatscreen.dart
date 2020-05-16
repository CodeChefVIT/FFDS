import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'constants.dart';
import 'profile 2 screen.dart';
import 'chatscreen2.dart';
import 'matches screen.dart';

class ChatScreen extends StatefulWidget {
  String email4;
  ChatScreen(this.email4);
  static const String id='chatscreen';
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  String email;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    email=widget.email4;
  }
  final messageController= TextEditingController();

  @override
  Widget build(BuildContext context) {
    return  SafeArea(
      child: Scaffold(
        body:  Column(
          mainAxisSize: MainAxisSize.max,
          children: <Widget>[
      
                Container(
                  padding: EdgeInsets.fromLTRB(0.0, 0.0, 15.0, 0.0),
                    color: kbuttonColour,
                    height: 90.0,
                    width: 410.0,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          mainAxisSize: MainAxisSize.min,
                          children: <Widget>[
                            Container(
                              width: 38.0,
                              child: Center(
                                child: IconButton(

                                  icon:Icon( Icons.arrow_back_ios,size: 30.0,color: kTextColour,),
                                  onPressed: (){
                                    Navigator.pop(context);
                                  },
                                ),
                              ),
                            ),
                            Text('Back' ,style: TextStyle(
                              color: kTextColour,
                              fontFamily: 'CircularStd',
                              fontSize: 24.0,
                            ),),
                          ],),
                        CircleAvatar(
                      radius: 35.0,
                      backgroundColor: Colors.blueGrey,
                        ),
                  ],
                    ),
                   ),




      Expanded(
        child: Container(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.end,

            children: <Widget>[
             Container(
               height: 100.0,
               padding: EdgeInsets.all(10.0),
               color: kGrayColour,
                 child:Row(
                   children: <Widget>[
                     Expanded(
                       child: TextField(
                         decoration: kTextFieldDecoration,
                       ),
                     ),
                     SizedBox(width: 10.0,),
                     Icon(Icons.send),
                   ],
                 ),
             ),
              Flexible(
                child: Container(
                  width: 400.0,
                  height: 50.0,
                  color: kbuttonColour,
                  padding: EdgeInsets.symmetric(vertical: 0.0,horizontal: 10.0,),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      IconButton(icon: Icon(Icons.person_outline),
                        onPressed: (){
                          Navigator.push(context, MaterialPageRoute(builder: (context){
                            return ProfileScreen(email2: email,);
                          }));


                        },
                        color: Colors.black,
                        iconSize: 30.0,),
                      Expanded(
                        child: GestureDetector(
                          onTap: (){
                            Navigator.push(context, MaterialPageRoute(builder: (context){
                              return Matches( email,);
                            }));
                          },
                          child: Container(
                            height: 25.0,

                            child: Image( image: AssetImage('images/book.png'),),
                          ),
                        ),
                      ),
                      IconButton(

                        icon: Icon(Icons.near_me),
                        onPressed: (){
                          Navigator.push(context, MaterialPageRoute(builder: (context){
                            return Chats( email);
                          }));
                        },
                        color: Colors.white,


                        iconSize: 30.0,),

                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
                ],
              ),
            ),
    );
  }
}
