package com.codechef.ffds

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        bottom_nav.setOnNavigationItemSelectedListener(navListener)

        supportFragmentManager.beginTransaction().replace(R.id.container, ProfileFragment()).commit()
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

    fun getProfile():Profile{
        return intent.getSerializableExtra("Profile") as Profile
    }

    override fun onBackPressed() {
        super.onBackPressed()
        finish()
    }
}
