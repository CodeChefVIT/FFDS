package com.codechef.ffds

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.RadioButton
import kotlinx.android.synthetic.main.register2_activity.*

class RegisterActivity2 : AppCompatActivity() {

    var gender:String?=null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.register2_activity)

        submit_btn.setOnClickListener {
            prompt.visibility= View.GONE
            val phone=phone_number.text.toString().trim()
            val name=full_name.text.toString().trim()
            if(phone.length!=10)
                prompt.visibility=View.VISIBLE
            else
                saveUser(name, phone)
        }
    }

    fun onRadioButtonClicked(view: View) {
        if (view is RadioButton) {
            val checked = view.isChecked
            gender= when (view.getId()) {
                R.id.male -> "Male"
                R.id.female -> "Female"
                R.id.others -> "Others"
                else -> "Rather not say"
            }
        }
    }

    fun saveUser(name:String, phone:String){

        val tinyDB:TinyDB= TinyDB(baseContext)
        tinyDB.putString("Name", name)
        tinyDB.putString("Phone", phone)
        tinyDB.putString("Gender", gender)
    }
}
