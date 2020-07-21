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

        verifyMail(apiHolder)

    }
    fun registerUser(apiHolder: ApiHolder){
        val fields= mutableMapOf(
            "name" to "Ishan2",
            "gender" to "Male",
            "password" to "Ducati750",
            "email" to "axil.ishan8@gmail.com",
            "phone" to "9988776655")

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
        call.enqueue(object: Callback<Token>{
            override fun onFailure(call: Call<Token>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<Token>, response: Response<Token>) {
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

    fun addChats(apiHolder: ApiHolder){
        val chat=Chat(
            "axil.isha2@gmail.com",
            "axil.ishan2@gmail.com",
            "axil.ishan2",
            "Hey",
            "5:00 pm")

        val call=apiHolder.addChat(chat)
        call.enqueue(object: Callback<Chat>{
            override fun onFailure(call: Call<Chat>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<Chat>, response: Response<Chat>) {
                Toast.makeText(baseContext, response.message(), Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun viewProfile(apiHolder: ApiHolder){
        val call=apiHolder.profileView("JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjBkYzlhZTA3NWY5MTExMWM1ZmYxNWEiLCJpYXQiOjE1OTQ3Mzk5NzksImV4cCI6MTU5NDgyNjM3OX0._oH3SIKgOsoWZqSHm3yj13Y-H5O8VJyaUOr8DwmBaJQ", "navyaa.sharma2018@vitstudent.ac.in")
        call.enqueue(object: Callback<ProfileResponse>{
            override fun onFailure(call: Call<ProfileResponse>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }
            override fun onResponse(call: Call<ProfileResponse>, response: Response<ProfileResponse>) {
                Toast.makeText(baseContext, response.message(), Toast.LENGTH_SHORT).show()
            }
        })
    }

    fun verifyMail(apiHolder: ApiHolder){
        val call=apiHolder.sendMail()
        call.enqueue(object: Callback<ResponseBody>{
            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Toast.makeText(baseContext, response.message(), Toast.LENGTH_SHORT).show()
            }
        })
    }
}











