package com.codechef.ffds

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.RadioButton
import android.widget.Toast
import kotlinx.android.synthetic.main.register2_activity.*
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class RegisterActivity2 : AppCompatActivity() {

    var gender:String?="Male"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.register2_activity)

        submit_btn.setOnClickListener {
            prompt.visibility= View.GONE
            val phone=phone_number.text.toString().trim()
            val name=full_name.text.toString().trim()
            if(phone.length!=10) {
                prompt.text="* Enter a valid phone number"
                prompt.visibility = View.VISIBLE
            }
            else if(phone.isEmpty() || name.isEmpty()){
                prompt.text="* Fields can't be empty"
                prompt.visibility=View.VISIBLE
            }
            else
                registerUser(name, phone)
        }
    }

    fun onRadioButtonClicked(view: View) {
        if (view is RadioButton) {
            gender= when (view.getId()) {
                R.id.male -> "Male"
                R.id.female -> "Female"
                R.id.others -> "Others"
                else -> "Rather not say"
            }
        }
    }

    fun registerUser(name:String, phone:String){

        val tinyDB= TinyDB(baseContext)
        tinyDB.putString("Name", name)
        tinyDB.putString("Phone", phone)
        tinyDB.putString("Gender", gender)

        val retrofit: Retrofit = Retrofit.Builder()
            .baseUrl("https://ffds-new.herokuapp.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val apiHolder=retrofit.create(ApiHolder::class.java)

        val fields= mutableMapOf(
            "name" to name,
            "gender" to gender,
            "password" to tinyDB.getString("Password"),
            "email" to tinyDB.getString("Email"),
            "phone" to phone)

        val call=apiHolder.register(fields)

        call.enqueue(object: Callback<ResponseBody> {
            override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                Toast.makeText(applicationContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                Toast.makeText(applicationContext, response.message(), Toast.LENGTH_SHORT).show()
                if(response.message()=="Created") {
                    startActivity(Intent(baseContext, MainActivity::class.java))
                    finish()
                }
            }
        })
    }

    override fun onBackPressed() {
        startActivity(Intent(this, RegisterActivity1::class.java))
    }
}
