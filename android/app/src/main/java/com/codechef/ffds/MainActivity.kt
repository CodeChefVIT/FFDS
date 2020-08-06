package com.codechef.ffds

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.bottomnavigation.BottomNavigationView
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.messages_activity.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class MainActivity : AppCompatActivity() {

    val matches: ArrayList<Profile>? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        bottom_nav.setOnNavigationItemSelectedListener(navListener)

        supportFragmentManager.beginTransaction().replace(R.id.container, ProfileFragment()).commit()

       /* val retrofit: Retrofit = Retrofit.Builder()
            .baseUrl("https://ffds-new.herokuapp.com/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()

        val tinyDB=TinyDB(this)
        val apiHolder=retrofit.create(ApiHolder::class.java)
        val call=apiHolder.showFeed("JWT ${tinyDB.getString("Token")}",
            tinyDB.getString("Gender"), "20")

        call.enqueue(object: Callback<Feed>{
            override fun onFailure(call: Call<Feed>, t: Throwable) {
                Toast.makeText(baseContext, t.message, Toast.LENGTH_SHORT).show()
            }

            override fun onResponse(call: Call<Feed>, response: Response<Feed>) {
                val profiles=response.body()?.payload
                for (profile in profiles!!){
                    matches?.add(profile)
                }
            }
        })*/

    }

    private val navListener=BottomNavigationView.OnNavigationItemSelectedListener {
        var selectedFragment: Fragment? =null

        when(it.itemId){
            R.id.profile->selectedFragment=ProfileFragment()
            R.id.matches->selectedFragment=MatchFragment()
            R.id.dms->selectedFragment=MessagesFragment()
        }

        supportFragmentManager.beginTransaction().replace(R.id.container, selectedFragment!!).commit()
        return@OnNavigationItemSelectedListener true
    }

    override fun onBackPressed() {
        super.onBackPressed()
        finish()
    }
}
