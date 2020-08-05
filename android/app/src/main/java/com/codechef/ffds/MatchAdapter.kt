package com.codechef.ffds

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import de.hdodenhof.circleimageview.CircleImageView

class MatchAdapter(private val matches: ArrayList<Profile>?, val context: Context): RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
        val view: View = LayoutInflater.from(context).inflate(R.layout.match_adapter_item, parent, false)
        return MatchAdapter.ViewHolder(view)
    }

    override fun getItemCount(): Int {
        return matches.size
    }

    override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
        //setImage
    }

    class ViewHolder(itemView:View): RecyclerView.ViewHolder(itemView) {
        val circleImageView: CircleImageView? =null
    }

}