import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'constants.dart';
import 'chatscreen2.dart';
import 'profile 2 screen.dart';
import 'chatscreen.dart';
class Matches extends StatefulWidget {
  Matches(this.email1);
  String email1;
  static const id ='matches screen';
  @override
  _MatchesState createState() => _MatchesState();
}

class _MatchesState extends State<Matches> {
  String email;
  void initState() {
    super.initState();
    email=widget.email1;
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar:AppBar(
      backgroundColor: kbackColour,
      automaticallyImplyLeading: false,
      title:
      Row(
        mainAxisAlignment: MainAxisAlignment.center ,
        children: <Widget>[
          Container(
            height: 150.0,
            width: 100.0,
            child: Image.asset('images/Icon1.png'),),
        ],
      ),
    ),

      body: SafeArea(
        child: Container(
          child: Column(
            children: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  CircleAvatar(
                    radius: 70.0,
                    backgroundColor: Colors.black,
                  ),
                  CircleAvatar(
                    radius: 70.0,
                    backgroundColor: Colors.black,
                  ),
                ],
              ),
              SizedBox(height: 50.0,),
              Text('Match Found',style: kText2Style,),
              SizedBox(height: 50.0,),
              Center(
                child:GestureDetector(
                  onTap: (){
                    Navigator.push(context, MaterialPageRoute(builder: (context){
                      return ChatScreen( email,);
                    }));
                  },
                  child: Container(
                    padding: EdgeInsets.all(10.0),
                    width: 220.0,
                    height: 47.0,
                    decoration: BoxDecoration(borderRadius: BorderRadius.circular(10.0),
                        color: kbuttonColour),
                    child:Center(
                      child: Text('Send Message',
                        style: TextStyle(
                          fontSize: 18.0,),
                      ),
                    ),
                  ),
                ),
              ),
              SizedBox(height: 50.0,),
              Center(
                child: Container(
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(10.0),
                    border: Border.all(
                      color: kbuttonColour,
                    ),
                  ),
                  child:MaterialButton(
                    onPressed: (){
                    },
                    height: 42.0,
                    minWidth: 220.0,

                    child: Text('Show More',
                      style:TextStyle(
                        color: kTextColour,
                        fontWeight: FontWeight.w300,
                        fontSize: 18.0,
                      ),),
                  ),
                ),
              ),
              SizedBox(height: 120.0,),



            ],
          ),
        ),

      ),
      bottomNavigationBar:  Container(
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

                  child: Image( image: AssetImage('images/whitebook.png'),),
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
              color: Colors.black,


              iconSize: 30.0,),

          ],
        ),
      ),
    );
  }
}
