package com.codechef.ffds;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import java.util.ArrayList;

import de.hdodenhof.circleimageview.CircleImageView;

public class MatchFragment extends Fragment {

    int position=0;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View root=inflater.inflate(R.layout.match_activity, container, false);

        ArrayList<Integer> matchList= new ArrayList<>();
        matchList.add(R.drawable.image1);
        matchList.add(R.drawable.image2);
        matchList.add(R.drawable.image3);

        ImageButton next=root.findViewById(R.id.next);
        ImageButton previous=root.findViewById(R.id.previous);
        CircleImageView matchImage=root.findViewById(R.id.match_image);
        matchImage.setImageResource(matchList.get(position));

        next.setOnClickListener(v -> {
            position+=1;
            matchImage.setImageResource(matchList.get(position));
            previous.setVisibility(View.VISIBLE);

            if(position==2) next.setVisibility(View.INVISIBLE);
        });

        previous.setOnClickListener(v -> {
            position-=1;
            matchImage.setImageResource(matchList.get(position));
            next.setVisibility(View.VISIBLE);

            if(position==0) previous.setVisibility(View.INVISIBLE);
        });

        return root;
    }
}
