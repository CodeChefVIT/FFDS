import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:otp_text_field/style.dart';
import 'constants.dart';
import 'package:otp_text_field/otp_text_field.dart';
import 'package:dating_app/profile 2 screen.dart';
import 'networking.dart';
import 'package:rflutter_alert/rflutter_alert.dart';

class DetailsScreen extends StatefulWidget {
  DetailsScreen(this.email1,this.password1);
  final String email1;
  final String password1;
  static const String id='details';
  @override
  _DetailsScreenState createState() => _DetailsScreenState();
}
const String signupurl='https://ffds-new.herokuapp.com/register';
const String sendEmailUrl='https://ffds-new.herokuapp.com/send';

class _DetailsScreenState extends State<DetailsScreen> {
  int selectedRadio;
  String email;
  String password;
  String name;
  String number;
  int number1;
  String vitEmail;
  String gender;

  void initState() {

    super.initState();
    selectedRadio=0;
    update(widget.email1, widget.password1) ;

  }
  void update(String email2,String password2)
  {
    print('sent');
    email=email2;
    password=password2;

  }
  void setSelected(int val)
  {
    setState(() {
      selectedRadio = val;
    });
  }
  void sendEmail()async{

    NetworkData network =NetworkData('$sendEmailUrl?mailto=$email');
     var response = await network.getData();


  }
  void signUp()async{

    NetworkData networkData = NetworkData('$signupurl?name=$name&gender=$gender&password=$password&email=$email&phone=$number');
    var regUser = await networkData.getData();
    if(regUser=="Registered Successful")
      {

        sendEmail();
        Navigator.push(context, MaterialPageRoute(builder: (context){
          return ProfileScreen(email2: email,);
        }));

      }
    else if(regUser=="User already exists")
      {

        Alert(context: context, title: "User already exists", ).show();
      }
    else if(regUser['errors']['email']['message']=="invalid email")
      {

        Alert(context: context, title: "invalid email", ).show();
      }

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

        body: SingleChildScrollView(
          child: Container(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
            Container(
             child: Padding(
               padding: EdgeInsets.symmetric(vertical: 10.0,horizontal: 34.0),
               child: Text('Tell us about you.',
               style: kText2Style,),
             ),
            ),

                SizedBox(height: 10.0,),
                Container(
                  margin: EdgeInsets.fromLTRB(30.0,20.0,30.0,0.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        Text('Enter your Full Name*',style: kTextFieldStyle,),
                        SizedBox(height: 15.0,),
                        TextField(
                          onChanged: (value){
                            name=value;
                          },
                          decoration: InputDecoration(),
                        ),
                        SizedBox(height: 25.0,),
                        Text('Enter your VIT Email Address*',style: kTextFieldStyle,),
                        SizedBox(height: 15.0,),
                        TextField(
                          decoration: InputDecoration(),
                          onChanged: (value){
                            vitEmail=value;
                          },
                        ),
                        SizedBox(height: 25.0,),
                        Text('Enter your Phone Number*',style: kTextFieldStyle,),
                        SizedBox(height: 15.0,),
                        TextField(
                          onChanged: (value){
                            number=value ;
                          },
                          keyboardType: TextInputType.numberWithOptions(),
                          decoration: InputDecoration(),
                        ),

                      ],
                    ),
    ),
                SizedBox(height: 30.0,),
                          Container(

                            child: Row(
                              children: <Widget>[
                                Radio(
                                  value: 1,
                                  groupValue: selectedRadio,
                                  activeColor: kbuttonColour,
                                  onChanged: (val)
                                  {
                                    gender='male';
                                    print(gender);
                                    setSelected(val);
                                  },
                                ),
                                Text('Male',style:kTextFieldStyle ,),
                                Radio(
                                  value: 2,
                                  groupValue: selectedRadio,

                                  activeColor: kbuttonColour,
                                  onChanged: (val)
                                  {
                                    gender='female';
                                    setSelected(val);
                                  },
                                ),
                                Text('Female',style:kTextFieldStyle ,),
                                Radio(
                                  value: 3,
                                  groupValue: selectedRadio,
                                  activeColor: kbuttonColour,
                                  onChanged: (val)
                                  {
                                    gender='Bisexual';
                                    setSelected(val);
                                  },
                                ),
                                Text('Bisexual',style:kTextFieldStyle ,),
                                Radio(
                                  value: 4,
                                  groupValue: selectedRadio,
                                  activeColor: kbuttonColour,
                                  onChanged: (val)
                                  {
                                    gender='other';
                                    setSelected(val);
                                  },
                                ),
                                Text('Other',style:kTextFieldStyle ,),
                              ],
                            ),
                          ),



                        Container(
                        margin: EdgeInsets.fromLTRB(0.0, 20.0, 0.0,0.0 ),
                          child:Column(
                            children:<Widget>[


                              SizedBox(height: 17.0,),
                              Center(
                                child:GestureDetector(


                                  onTap: (){
                                    signUp();
                                  },
                                  child: Container(
                                    padding: EdgeInsets.all(10.0),
                                    width: 250.0,
                                    height: 47.0,
                                    decoration: BoxDecoration(borderRadius: BorderRadius.circular(10.0),
                                        color: kbuttonColour),
                                    child:Center(
                                      child: Text('SUBMIT',
                                        style: TextStyle(
                                          fontSize: 18.0,),
                                      ),
                                    ),



                                  ),
                                ),
                              ),
                              SizedBox(height: 30.0,),



                              Text('Made by CodeChef VIT',style: kSmallStyle,),
                        ],
                        ),
                        )],
            ),
          ),
        ),



        ),






    );
  }
}

