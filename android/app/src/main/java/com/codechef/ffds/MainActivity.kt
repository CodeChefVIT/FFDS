package com.codechef.ffds

import android.graphics.Bitmap
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.profile_activity.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        bottom_nav.setOnNavigationItemSelectedListener(navListener)

        val tinyDB=TinyDB(this)
        val uri:Uri=Uri.parse(tinyDB.getString("ImageURI"))
        //val bitmap: Bitmap = MediaStore.Images.Media.getBitmap(contentResolver, uri)
        //profileImage.setImageBitmap(bitmap)

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

    override fun onBackPressed() {
        super.onBackPressed()
        finish()
    }
}
