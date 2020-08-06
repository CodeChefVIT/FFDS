package com.codechef.ffds

import android.content.Context
import android.content.ContextWrapper
import android.content.Intent
import android.graphics.Bitmap
import android.net.Uri
import android.os.Bundle
import android.provider.MediaStore
import androidx.appcompat.app.AppCompatActivity
import co.lujun.androidtagview.TagView
import kotlinx.android.synthetic.main.profile_activity.tagView
import kotlinx.android.synthetic.main.update_profile_activity.*
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.util.*


class UpdateProfileActivity : AppCompatActivity() {

    companion object{
        const val PICK_IMAGE=1
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.update_profile_activity)

        val tinyDB = TinyDB(this)

        setDefaultData(tinyDB)

        uploadDp.setOnClickListener {
            val gallery:Intent=Intent()
            gallery.type = "image/*"
            gallery.action= Intent.ACTION_GET_CONTENT
            startActivityForResult(Intent.createChooser(gallery,"Select profile photo"), PICK_IMAGE)
        }

        val tags = tagView.tags
        add.setOnClickListener {
            handleTags(tags, tinyDB)
        }

        tagView.setOnTagClickListener(object : TagView.OnTagClickListener {
            override fun onSelectedTagDrag(position: Int, text: String?) {
                TODO("Not yet implemented")
            }

            override fun onTagLongClick(position: Int, text: String?) {
                TODO("Not yet implemented")
            }

            override fun onTagClick(position: Int, text: String?) {
                TODO("Not yet implemented")
            }

            override fun onTagCrossClick(position: Int) {
                val tag=tagView.getTagText(position)
                tags.remove(tag)
                tinyDB.putListString("Expectations", tags as ArrayList<String>?)
                tagView.tags=tags
            }

        })

        save_profile.setOnClickListener {
            tinyDB.putString("Bio",bio.text.toString().trim())
            tinyDB.putString("Name",your_name.text.toString().trim())
            startActivity(Intent(baseContext, MainActivity::class.java))
            finish()
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if(requestCode== PICK_IMAGE && resultCode==RESULT_OK){
            val imageURI:Uri= data?.data!!
            val bitmap: Bitmap =MediaStore.Images.Media.getBitmap(contentResolver, imageURI)
            dp.setImageBitmap(bitmap)
            val path=saveToInternalStorage(bitmap)
            val tinyDB= TinyDB(this)
            tinyDB.putString("ImagePath", path)
        }
    }

    private fun setDefaultData(tinyDB: TinyDB){

        bio.setText(tinyDB.getString("Bio"))
        your_name.setText(tinyDB.getString("Name"))
        tagView.tags = tinyDB.getListString("Expectations")
    }

    fun handleTags(tags:MutableList<String>, tinyDB: TinyDB){
        val tag = add_tags.text.toString().trim()
        if(!tag.isEmpty()) {
            tags.add(tag)
            tinyDB.putListString("Expectations", tags as ArrayList<String>?)
            tagView.addTag(tag)
        }
        add_tags.text = null
    }

    private fun saveToInternalStorage(bitmapImage: Bitmap): String? {
        val cw = ContextWrapper(applicationContext)
        val directory: File = cw.getDir("FFDS", Context.MODE_PRIVATE)
        val mypath = File(directory, "profileImage.jpg")
        var fos: FileOutputStream? = null
        try {
            fos = FileOutputStream(mypath)
            bitmapImage.compress(Bitmap.CompressFormat.PNG, 100, fos)
        } catch (e: Exception) {
            e.printStackTrace()
        } finally {
            try {
                fos?.close()
            } catch (e: IOException) {
                e.printStackTrace()
            }
        }
        return directory.getAbsolutePath()
    }

}
