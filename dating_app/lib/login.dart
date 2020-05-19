import 'package:dating_app/constants.dart';
import 'package:flutter/cupertino.dart';
import 'profile 2 screen.dart';
import 'networking.dart';
import 'registration.dart';
import 'package:flutter/material.dart';
import 'package:rflutter_alert/rflutter_alert.dart';
import 'matches screen.dart';
import 'chatscreen2.dart';
import 'chatscreen.dart';

class LoginScreen extends StatefulWidget{
    static const String id ='login';

  @override
  _LoginScreenState createState() => _LoginScreenState();
}
const String url='https://ffds-new.herokuapp.com/login';
const String emailUrl='https://ffds-new.herokuapp.com/verifyemail';
const String sendEmailUrl='https://ffds-new.herokuapp.com/send';

class _LoginScreenState extends State<LoginScreen> {
  final messageController= TextEditingController();

  bool passwordVisible= true;
  String email;
  String password;
  void sendEmail()async{

    NetworkData network =NetworkData('$sendEmailUrl?mailto=$email');
    var response = await network.getData();
    if(response=="error")
      {

        Alert(context: context, title: "Unable to send email").show();

      }
    else
      {
        Navigator.push(context, MaterialPageRoute(builder: (context){
          return ProfileScreen(email2: email,);
        }));
      }


  }
  void verifyEmail() async
  {

    NetworkData networkData =NetworkData('$emailUrl?email=$email');
    var verify = await networkData.getData();
    if(verify=="email not verified")
      {
        
        Alert(context: context, title: 'Please verify email').show();
        sendEmail();
      }
    else
      {
        Navigator.push(context, MaterialPageRoute(builder: (context){
          return ProfileScreen(email2: email,);
        }));
      }
  }

  void submitData()async{

    NetworkData network = NetworkData('$url?email=$email&password=$password');
    var userData = await network.getData();
    if(userData['response']=="Login successful")
      {
       
        verifyEmail();

        Matches(email);
        Chats(email);
        ChatScreen(email);


      }
    else if(userData['response']=="User not found")
      {
        Alert(context: context, title: "User not found", ).show();
      }
    else if(userData['response']== "Invalid Password")
    {
      Alert(context: context, title: "Invalid password", ).show();
    }

  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(

    appBar: AppBar(
      automaticallyImplyLeading: false,
      backgroundColor: kbackColour,
        title:Center(
          child: Container(
            height: 150.0,
              width: 100.0,
            child: Image.asset('images/Icon1.png'),),
        ),
    ),
      body: SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Expanded(
              child: SingleChildScrollView(
                child: Container(
                  margin: EdgeInsets.symmetric(vertical: 20.0,horizontal: 44.0),
                  child: Column(
                    children:<Widget>[ Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children:<Widget>[Text('Hey!',
                        style:kTextStyle,
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

                                keyboardType: TextInputType.emailAddress,
                                decoration: InputDecoration(
                                ),
                                onChanged: (value){
                                  email=value;
                                },
                              ),

                            ),
                            SizedBox(
                              height: 15.0,
                            ),
                            Text('Password',
                              style: kTextFieldStyle,),
                            TextField(

                              obscureText: passwordVisible,
                              decoration: InputDecoration(
                                suffixIcon: IconButton(icon: Icon(passwordVisible ? Icons.visibility_off : Icons.visibility,),
                                  onPressed:() {
                                    setState(() {
                                      passwordVisible = !passwordVisible;
                                    });
                                  },
                                ),
                              ),
                              onChanged: (value){
                                password=value;
                              },
                            ),
                            SizedBox(
                              height: 7.0,
                            ),

                            Column(
                              children:<Widget>[
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
                                    onTap: () {

                                      setState(() {
                                        submitData();
                                      });

                                    },
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




                          ],
                        ),
                      ),


                    ],
                  ),

                ),
              ),
            ),
          ],
        ),
      ),



      bottomNavigationBar: Row(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Text('Made by CodeChef VIT',style: kSmallStyle,),
        ],
      ),
            );





  }
}
