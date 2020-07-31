package com.codechef.ffds

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.register1_activity.*

class RegisterActivity1 : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.register1_activity)

        register_btn.setOnClickListener {
            val email=email_input.text.toString()
            val pass=pass_input.text.toString()
            val confirm=confirm_pass.text.toString()

            if(!email.contains("vitstudent.ac.in")) {
                prompt.text = "* Enter a valid VIT email"
                prompt.visibility= View.VISIBLE
            }
            else if(email.isEmpty() || pass.isEmpty() || confirm.isEmpty()){
                prompt.visibility=View.VISIBLE
                prompt.text="* Fields can't be empty"
            }
            else if(pass!=confirm){
                prompt.visibility=View.VISIBLE
                prompt.text="* Passwords don't match"
            }
            else{
                saveUser(email, pass)
            }
        }
    }

    private fun saveUser(email:String, pass:String){
        val tinyDB:TinyDB= TinyDB(baseContext)

        tinyDB.putString("Email", email)
        tinyDB.putString("Password", pass)

        startActivity(Intent(this, RegisterActivity2::class.java))
        finish()
    }
}
