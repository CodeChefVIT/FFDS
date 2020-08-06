package com.codechef.ffds
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import de.hdodenhof.circleimageview.CircleImageView
import kotlin.collections.ArrayList

class MatchAdapter internal constructor(
    private val context: Context,
    private val matches: ArrayList<Int>
) :
    RecyclerView.Adapter<MatchAdapter.ViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view: View =
            LayoutInflater.from(context).inflate(R.layout.match_adapter_item, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
       holder.dp.setImageResource(matches.get(position))
    }

    override fun getItemCount(): Int {
        return matches.size
    }

    class ViewHolder constructor(itemView: View) :
        RecyclerView.ViewHolder(itemView) {
        var dp:CircleImageView

        init {
            dp=itemView.findViewById(R.id.match_dp)
        }
    }

}