import 'package:dating_app/matches%20screen.dart';
import 'package:flutter/material.dart';
import 'constants.dart';
import 'package:dating_app/profile 2 screen.dart';
import 'chatscreen.dart';
class Chats extends StatefulWidget {
  String email3;
  Chats(this.email3);
  static const id ='chatsexample';
  @override
  _ChatsState createState() => _ChatsState();
}

class _ChatsState extends State<Chats> {
  String email;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    email=widget.email3;
  }
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
      appBar: AppBar(
      backgroundColor: kbackColour,
        automaticallyImplyLeading: false,
        title:
      Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                Container(
                  width: 38.0,
                  child: Center(
                    child: IconButton(

                     icon:Icon( Icons.arrow_back_ios,size: 30.0,color: kbuttonColour,),
                      onPressed: (){
                       Navigator.pop(context);
                      },
                    ),
                  ),
                ),
                Text('Back' ,style: kBackStyle,),
              ],),
          SizedBox(width: 55.0,),

          Container(
            height: 150.0,
            width: 100.0,
            child: Image.asset('images/Icon1.png'),),
        ],
      ),
    ),


    body: Column(
      crossAxisAlignment: CrossAxisAlignment.start,

      children: <Widget>[
        Expanded(
          child: Container(  
            padding: EdgeInsets.fromLTRB(30.0, 0.0, 0.0, 0.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
    children: <Widget>[


            Text('Matches',
            style: kTextStyle,),

            Container(
              margin: EdgeInsets.symmetric(horizontal: 10.0,vertical: 20.0),
              child: Row(
                children: <Widget>[
                  CircleAvatar(
                    radius: 40.0,
                    backgroundColor: Colors.black,

                  ),
                  SizedBox(width: 10.0,),
                  CircleAvatar(
                    radius: 40.0,
                    backgroundColor: Colors.black,

                  ),
                  SizedBox(width: 10.0,),
                  CircleAvatar(
                    radius: 40.0,
                    backgroundColor: Colors.black,

                  ),
                  SizedBox(width: 10.0,),
                  CircleAvatar(
                    radius: 40.0,
                    backgroundColor: Colors.black,

                  ),
                ],
              ),

            ),
            Text('Messages',
            style: kTextStyle,),
     Expanded(
       child: ListView(
              children:[
            MessageBox(name: 'user1',message: 'hey',),
                MessageBox(name: 'user2',message: 'hey',),
                MessageBox(name: 'user3',message: 'hey',),
                MessageBox(name: 'user4',message: 'hey',),
       ],
       ),
     ),
            ],
            ),
          ),
        ),

        Container(
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



      ],
    ),
      ),
    );
  }
}
 class MessageBox extends StatelessWidget {
  MessageBox({this.name,this.message});
  final String name;
  final String message;
   @override
   Widget build(BuildContext context) {
     return
           GestureDetector(
             onTap: (){
               Navigator.pushNamed(context,ChatScreen.id);
             },

             child: Padding(
               padding: EdgeInsets.symmetric(vertical: 10.0,horizontal: 0.0),
               child: ListTile(
                 leading: Container(
                   child: CircleAvatar(
                     radius: 30.0,
                     backgroundColor: Colors.blueGrey,
                 ),
               ),
                 title: Text(name ,style: kTextFieldStyle,),
                 subtitle: Text(message ,style: kSmallStyle,),

             ),
     ),
           );
   }
 }
