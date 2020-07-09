import 'package:flutter/material.dart';
import 'constants.dart';
import 'package:dating_app/profile 1 screen.dart';
class RegScreen extends StatefulWidget {
  static const String id ='regscreen';
  @override
  _RegScreenState createState() => _RegScreenState();
}


class _RegScreenState extends State<RegScreen> {
 String email;
 String password;
 String confirmedPassword;
  bool passwordVisible =true;
  bool passwordVisible1= true;
 bool validateEmail(String value) {
   Pattern pattern = r'[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$';
   RegExp regex =  RegExp(pattern);
   return (!regex.hasMatch(value)) ?false : true;
 }

 final GlobalKey<FormState> _form = GlobalKey<FormState>();
 final GlobalKey<FormState> _form1 = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
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



      body: SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Expanded(
              child: SingleChildScrollView(
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
                            Text(' VIT Email address',
                              style: kTextFieldStyle,),
                            Form(
                              key: _form,
                              child: Container(
                                child: TextFormField(

                                  decoration: InputDecoration(
                                  ),
                                  onChanged: (value)
                                  {
                                    email=value;
                                  },
                                    validator: (val){
                                      if(!validateEmail(val)) {
                                        return 'Please enter a valid email ';
                                      }
                                      return null;
                                    }
                                ),
                              ),
                            ),
                            SizedBox(
                              height: 5.0,
                            ),
                            Text('Password',
                              style: kTextFieldStyle,),
                            TextFormField(
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
                              }
                              ),

                            SizedBox(
                              height: 5.0,
                            ),
                            Text('Confirm Password',
                              style: kTextFieldStyle,
                            ),
                            Form(
                              key: _form1,
                              child: TextFormField  (
                                  obscureText: passwordVisible1,
                                decoration: InputDecoration(
                                    suffixIcon: IconButton(icon: Icon(passwordVisible1 ? Icons.visibility_off : Icons.visibility,),
                                      onPressed:() {
                                        setState(() {
                                          passwordVisible1 = !passwordVisible1;
                                        });
                                      },
                                    ),
                                ),
                                onChanged: (value){
                                  confirmedPassword=value;
                                },
                                  validator: (val){
                                    if(val!= password) {
                                      return 'Password does not Match';
                                    }
                                    return null;

                                  }
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
                                  onPressed: (){
                                      if (_form.currentState.validate())
                                       {
                                         if(_form1.currentState.validate()) {
                                           Navigator.push(context,
                                               MaterialPageRoute(
                                                   builder: (context) {
                                                     return DetailsScreen(
                                                         email, password);
                                                   }));
                                         }
                                      }
                                  },
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
    )
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
