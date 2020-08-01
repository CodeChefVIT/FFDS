package com.codechef.ffds

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import kotlinx.android.synthetic.main.login_activity.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class LoginActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.login_activity)

        val retrofit: Retrofit = Retrofit.Builder()
            .baseUrl("https://ffds-new.herokuapp.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val apiHolder=retrofit.create(ApiHolder::class.java)

         login_btn.setOnClickListener {
             val email=email_input.text.toString().trim()
             val password=pass_input.text.toString().trim()
             if(email.isEmpty() || password.isEmpty()){
                 prompt.text="* Fields can't be empty"
                 prompt.visibility= View.VISIBLE
             }
             else if(!email.contains("vitstudent.ac.in")){
                 prompt.text="* Enter a valid VIT email"
                 prompt.visibility=View.VISIBLE
             }
             else
                 loginUser(email, password, apiHolder)
         }
    }

    fun loginUser(email:String, password:String, apiHolder:ApiHolder){

        val fields= mutableMapOf("email" to email, "password" to password)

        val call=apiHolder.login(fields)
        call.enqueue(object: Callback<Token> {
            override fun onFailure(call: Call<Token>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<Token>, response: Response<Token>) {
                Toast.makeText(baseContext, response.message(), Toast.LENGTH_SHORT).show()
                val token= response.body()?.token
                val tinyDB=TinyDB(baseContext)
                tinyDB.putString("Token", response.body()?.token)
                if(response.message()=="OK") {
                    if (token != null) {
                        updateProfile(token, apiHolder, email)
                    }
                    startActivity(Intent(baseContext, MainActivity::class.java))
                    finish()
                }
            }
        })
    }

    fun updateProfile(token: String, apiHolder: ApiHolder, email: String){
        val call=apiHolder.profileView("JWT $token", email)
        call.enqueue(object: Callback<ProfileResponse>{
            override fun onFailure(call: Call<ProfileResponse>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }
            override fun onResponse(call: Call<ProfileResponse>, response: Response<ProfileResponse>) {
                Toast.makeText(baseContext, response.body()!!.user.name, Toast.LENGTH_SHORT).show()
                if(response.message()=="OK"){
                    val profile:Profile= response.body()!!.user
                    val tinyDB=TinyDB(baseContext)
                    tinyDB.putString("Branch", profile.branch)
                    tinyDB.putString("Bio", profile.bio)
                    tinyDB.putInt("Year", profile.year)
                    tinyDB.putString("Name", profile.name)
                    tinyDB.putLong("PhoneNo", profile.phone)
                    //tinyDB.putString("Slot", profile.slot)(NULL_POINTER)
                    //tinyDB.putListString("Expectaions", profile.expectations as ArrayList<String>?)
                }
            }
        })
    }
}
