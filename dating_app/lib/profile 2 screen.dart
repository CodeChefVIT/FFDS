import 'package:dating_app/chatscreen2.dart';
import 'package:dating_app/login.dart';
import 'package:flutter/material.dart';
import 'package:dating_app/profile 1 screen.dart';
import 'package:flutter/widgets.dart';
import 'constants.dart';
import 'package:file_picker/file_picker.dart';
import 'matches screen.dart';
import 'package:dating_app/chatscreen.dart';
import 'networking.dart';
import 'package:rflutter_alert/rflutter_alert.dart';


class ProfileScreen extends StatefulWidget {
  static const id='profile';
  String email2;
  ProfileScreen({this.email2});
  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}
final String editUrl='https://ffds-new.herokuapp.com/updateDetails';
final String infoUrl='https://ffds-new.herokuapp.com/showDetails';

class _ProfileScreenState extends State<ProfileScreen> {
  final bioController= TextEditingController();
  final exController= TextEditingController();
  final yearController= TextEditingController();
  final branchController= TextEditingController();
  String email;
   String name;
  int number;
  String branch;
  String year;
  String vitEmail;
  String bio;
  String expectations;
  bool isLoading = false;
  @override
  void initState() {
    super.initState();
    email=widget.email2;
    isLoading=true;
    getInfo();

  }
  void editProfile() async
  {
    NetworkData networkData=NetworkData('$editUrl?branch=$branch&year=$year&email=$email&bio=$bio&expectations=$expectations');
   var response = await  networkData.getData();
   if(response=="Details Updated")
     {
       setState(() {

         Alert(context: context, title: "Details Updated", ).show();
       });


     }
  }
  void getInfo() async
  {
    NetworkData network= NetworkData('$infoUrl?email=$email');
      var info =await network.getData();
      print('came here');
      setState(() {
        isLoading=false;
        if(info!="Details cannot be found")
        {
          bioController.text=info['bio'];
          yearController.text=info['year'];
          branchController.text=info['branch'];
          exController.text=info['expectations'];
          name=info['name'];
          number=info['phone'];

        }
      });




  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      actions: <Widget>[
        Row(
          children: <Widget>[
            IconButton(
              icon:Icon( Icons.person_outline),
              color: kbuttonColour,
              onPressed: ()
              {
                Navigator.pushNamed(context, LoginScreen.id);
              },
            ),
            Text('Log out ',style: kSmallPinkStyle.copyWith(fontSize: 20.0,),)
          ],
        )
      ],
      backgroundColor: kbackColour,
      automaticallyImplyLeading: false,
      title:Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[

          Container(
            height: 150.0,
            width: 100.0,
            child: Image.asset('images/Icon1.png'),),
        ],
      )

    ),

      body:isLoading?
          Center(child: CircularProgressIndicator(),)
            :
      SafeArea(
        child: SingleChildScrollView(
          child: Container(
            child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
            Column(
              children:<Widget>[
                    Container(
                      margin: EdgeInsets.fromLTRB(30.0, 0.0, 270.0, 0.0),
                      child: Text('Profile',
                        style:kTextStyle,
                        ),
                    ),
                    Center(
                      child: Container(
                        child:Column(

                          children: <Widget>[

                            SizedBox(height: 20.0,),
                            Text(
                              name.toUpperCase(),
                              style:TextStyle(
                                fontFamily: 'CircularStd',
                                fontSize:30.0,
                                color: kbuttonColour,
                                fontWeight:FontWeight.bold,
                              ),
                            ),
                            Text(
                              number.toString(),
                              style:TextStyle(
                                fontSize:20.0,
                                color: kTextColour,
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.symmetric(vertical: 10.0,horizontal: 20.0),
                     child: Column(
                       crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Text('About me ',style: kTextFieldStyle,),
                        SizedBox(height: 5.0,),
                        TextField(
                          maxLength: 500,
                          controller: bioController,
                          decoration: InputDecoration(),
                          onChanged: (value)
                          {
                            bio=value;
                          },
                        ),

                        Text('Expectations',style: kTextFieldStyle,),
                        SizedBox(height: 5.0,),
                        TextField(
                          controller: exController,
                          decoration: InputDecoration(),
                          onChanged: (value){
                            expectations=value;
                          },
                        ),
                        SizedBox(height: 10.0,),
                        Text('Branch',style: kTextFieldStyle,),
                        SizedBox(height: 5.0,),
                        TextField(
                          controller: branchController,
                          onChanged: (value)
                          {
                            branch=value;
                          },
                        ),
                        SizedBox(height: 10.0,),
                        Text('Year',style: kTextFieldStyle,),
                        SizedBox(height: 5.0,),
                        TextField(
                          controller: yearController,
                          onChanged: (value){
                            year=value;
                          },
                        ),

                      ],
                     ),
                    ),
                SizedBox(height: 20.0,),
                Center(
                  child: GestureDetector(
                    onTap: (){
                      editProfile();
                      },
                    child: Text('Edit Profile',style: kSmallStyle.copyWith(
                      decoration: TextDecoration.underline,
                    ),),
                  ),
                ),
                SizedBox(height: 7.0,),

                    ],
                  ),


                ],

    ),
          ),
        ),
      ),
      bottomNavigationBar: Container(
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
              color: Colors.white,
              iconSize: 28.0,),
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
              color: Colors.black,


              iconSize: 28.0,),

          ],
        ),
      ),


    );
  }
}

class BottomBar extends StatefulWidget {
  @override
  _BottomBarState createState() => _BottomBarState();
}

class _BottomBarState extends State<BottomBar> {


  @override
  Widget build(BuildContext context) {
    return Container(
        color: kbuttonColour,
        child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
        IconButton(
        icon: Icon(Icons.person_outline),
        onPressed: (){},

             color: Colors.white,
            iconSize: 30.0,),
       IconButton(icon: Icon(Icons.book),
    onPressed: null,
       disabledColor: Colors.black,
          iconSize: 30.0,),
    IconButton(
    icon: Icon(Icons.near_me),
    onPressed: (){
    Navigator.pushNamed(context, Chats.id);
    },
    color:Colors.black,
    iconSize: 30.0,
    ),

    ],
    ),
    );
  }
}
//CircleAvatar(
//radius: 50.0,
//backgroundColor: Colors.black,
//),
//Container(
//child: Row(
//children: <Widget>[
//IconButton(icon: Icon(Icons.photo_filter),
//onPressed:() async{
//List<dynamic> files = await FilePicker.getMultiFile(
//type: FileType.image,
//allowedExtensions: ['jpg', 'pdf', 'doc'],
//);
//},
//),
//Text('Upload Timetable',style: kSmallStyle,)
//],
//),
//),

