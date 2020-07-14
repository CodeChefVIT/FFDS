package com.codechef.ffds

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class TestActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_test)

        val retrofit:Retrofit= Retrofit.Builder()
            .baseUrl("https://ffds-new.herokuapp.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val apiHolder=retrofit.create(ApiHolder::class.java)

        val fields= mutableMapOf(
            "name" to "Ishan",
            "gender" to "Male",
            "password" to "Ducati750",
            "email" to "axil.ishan2@gmail.com",
            "phone" to "9988776655",
            "slot" to "evening")

        val call=apiHolder.register(fields)
        call.enqueue(object: Callback<ResponseBody>{
            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                Toast.makeText(applicationContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Toast.makeText(applicationContext, response.message(), Toast.LENGTH_SHORT).show()
            }

        })
    }
}
/*Retrofit retrofit=new Retrofit.Builder()
                .baseUrl("https://i.olsh.me/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        ApiHolder apiHolder=retrofit.create(ApiHolder.class);
        Call<ImageURL> call=apiHolder.getFavicon("allicons.json?url="+url);
        call.enqueue(new Callback<ImageURL>() {
            @Override
            public void onResponse(Call<ImageURL> call, Response<ImageURL> response) {
                if(response.isSuccessful()) {
                    if (!response.message().equals("Not Found")) {
                        List<Icon> URLs = response.body().getIcons();
                        if(!URLs.isEmpty()) {
                            Picasso.get().load(URLs.get(0).getUrl()).into(image);
                        }
                    }
                }
            }*/
