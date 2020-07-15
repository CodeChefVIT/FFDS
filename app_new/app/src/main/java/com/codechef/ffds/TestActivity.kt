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

        showDetails(apiHolder)

    }
    fun registerUser(apiHolder: ApiHolder){
        val fields= mutableMapOf(
            "name" to "Ishan",
            "gender" to "Male",
            "password" to "Ducati750",
            "email" to "axil.isha2@gmail.com",
            "phone" to "9988776655",
            "slot" to "evening")

        val call=apiHolder.register(fields)

        call.enqueue(object: Callback<ResponseBody> {
            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                Toast.makeText(applicationContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Toast.makeText(applicationContext, response.message(), Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun loginUser(apiHolder: ApiHolder){
        val fields= mutableMapOf("email" to "axil.ishan2@gmail.com", "password" to "Ducati750")

        val call=apiHolder.login(fields)
        call.enqueue(object: Callback<ResponseBody>{
            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Toast.makeText(baseContext, response.message(), Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun updateDetails(apiHolder: ApiHolder){
        val fields= mutableMapOf(
            "branch" to "CSE",
            "year" to "first",
            "email" to "axil.ishan2@gmail.com",
            "bio" to "Breaking Bad fan",
            "expectations" to "Breaking Bad fan")

        val call=apiHolder.update(fields)
        call.enqueue(object: Callback<ResponseBody>{
            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Toast.makeText(baseContext, response.message(), Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun showDetails(apiHolder: ApiHolder){
        val fields= mutableMapOf("email" to "axil.ishan2@gmail.com")

        val call=apiHolder.show(fields)
        call.enqueue(object: Callback<User>{
            override fun onFailure(call: Call<User>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<User>, response: Response<User>) {
                Toast.makeText(baseContext, response.body()?.bio, Toast.LENGTH_SHORT).show()
            }
        });
    }
}











