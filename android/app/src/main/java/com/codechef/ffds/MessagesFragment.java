package com.codechef.ffds;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.Objects;

public class MessagesFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View root= inflater.inflate(R.layout.messages_activity, container, false);

        ArrayList<Integer> mList=new ArrayList<>();
        mList.add(R.drawable.re);
        mList.add(R.drawable.re);
        mList.add(R.drawable.re);
        mList.add(R.drawable.re);
        mList.add(R.drawable.re);
        RecyclerView recyclerView=root.findViewById(R.id.matches_view);
        MatchAdapter adapter=new MatchAdapter(Objects.requireNonNull(getContext()), mList);
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext(), LinearLayoutManager.HORIZONTAL, false));
        recyclerView.setAdapter(adapter);

        ArrayList<Messages> list=new ArrayList<>();
        list.add(new Messages("Hey", R.drawable.re, "Goku"));
        list.add(new Messages("Yo", R.drawable.re, "Naruto"));
        list.add(new Messages("Hey", R.drawable.re, "Saitama"));
        list.add(new Messages("Buri Buri", R.drawable.re, "Shinchan"));
        list.add(new Messages("...", R.drawable.re, "Anonymous"));
        RecyclerView recyclerView1=root.findViewById(R.id.messages_view);
        MessageAdapter messageAdapter=new MessageAdapter(getContext(), list);
        recyclerView1.setLayoutManager(new LinearLayoutManager(getContext()));
        recyclerView1.setAdapter(messageAdapter);

        return root;
    }
}
