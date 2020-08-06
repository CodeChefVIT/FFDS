package com.codechef.ffds
import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import de.hdodenhof.circleimageview.CircleImageView
import kotlin.collections.ArrayList

class MessageAdapter internal constructor(
    private val context: Context,
    private val matches: ArrayList<Messages>
) :
    RecyclerView.Adapter<MessageAdapter.ViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view: View =
            LayoutInflater.from(context).inflate(R.layout.messages_adapter_item, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.dp.setImageResource(matches.get(position).profileImage)
        holder.last.text=matches.get(position).lastMessage
        holder.name.text=matches.get(position).name
    }

    override fun getItemCount(): Int {
        return matches.size
    }

    class ViewHolder constructor(itemView: View) :
        RecyclerView.ViewHolder(itemView) {
        var dp:CircleImageView
        var name: TextView
        var last:TextView

        init {
            dp=itemView.findViewById(R.id.dp)
            name=itemView.findViewById(R.id.name)
            last=itemView.findViewById(R.id.last_message)
        }
    }

}