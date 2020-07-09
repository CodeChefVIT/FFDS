import 'package:http/http.dart' as http;
import 'dart:convert';
class NetworkData
{
  NetworkData(this.url);
  String url;
  Future getData() async
  {

    http.Response response =await http.post(url);
    print('$url');
    if(response.statusCode==200)
    {
      print('success' );
      String data = response.body;
      print(data);
      return  jsonDecode(data);

    }
    else
    {
      print(response.statusCode);
    }
  }

}