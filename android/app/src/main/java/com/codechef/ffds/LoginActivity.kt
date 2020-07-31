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
                 loginUser(email, password)
         }
    }

    fun loginUser(email:String, password:String){
        val retrofit: Retrofit = Retrofit.Builder()
            .baseUrl("https://ffds-new.herokuapp.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val apiHolder=retrofit.create(ApiHolder::class.java)

        val fields= mutableMapOf("email" to email, "password" to password)

        val call=apiHolder.login(fields)
        call.enqueue(object: Callback<Token> {
            override fun onFailure(call: Call<Token>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<Token>, response: Response<Token>) {
                Toast.makeText(baseContext, response.message(), Toast.LENGTH_SHORT).show()
                Toast.makeText(baseContext, response.body()?.token, Toast.LENGTH_SHORT).show()
                val tinyDB=TinyDB(baseContext)
                tinyDB.putString("Token", response.body()?.token)
                if(response.message()=="OK") {
                    startActivity(Intent(baseContext, MainActivity::class.java))
                    finish()
                }
            }
        })
    }
}
