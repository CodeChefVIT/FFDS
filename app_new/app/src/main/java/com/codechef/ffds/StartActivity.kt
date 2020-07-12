package com.codechef.ffds

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.profile_activity.*

class StartActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.update_profile_activity)

        val tags= listOf("doglover","biker","wanderer","breakingbad","got","royalenfield")
        tagView.setTags(tags)

    }
}
