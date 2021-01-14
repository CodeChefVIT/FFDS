package com.codechef.ffds;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class Adapter extends RecyclerView.Adapter<Adapter.ViewHolder> {

    private final ArrayList<User> matches;
    private final Context context;

    Adapter(Context context, ArrayList<User> matches) {
        this.context = context;
        this.matches = matches;
    }

    @NonNull
    @Override
    public Adapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.match_item_layout, parent, false);
        return new Adapter.ViewHolder((view));
    }

    @Override
    public void onBindViewHolder(@NonNull final Adapter.ViewHolder holder, final int position) {
        holder.showProfile.setOnClickListener(v -> {

        });
        holder.name.setText(matches.get(position).getName());
        holder.bio.setText(matches.get(position).getBio());
    }

    @Override
    public int getItemCount() {
        return matches.size();
    }

    class ViewHolder extends RecyclerView.ViewHolder {

        TextView name, bio;
        Button showProfile;

        ViewHolder(@NonNull View itemView) {
            super(itemView);
            name=itemView.findViewById(R.id.match_name);
            bio=itemView.findViewById(R.id.match_bio);
            showProfile=itemView.findViewById(R.id.view_match);
        }
    }
}
