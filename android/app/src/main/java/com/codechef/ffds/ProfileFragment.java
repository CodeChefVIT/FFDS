package com.codechef.ffds;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import java.util.ArrayList;

import co.lujun.androidtagview.TagContainerLayout;

public class ProfileFragment extends Fragment {

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View root = inflater.inflate(R.layout.profile_activity, container, false);

        TextView bio = root.findViewById(R.id.bio);
        TextView name = root.findViewById(R.id.your_name);
        TextView phone = root.findViewById(R.id.phone_no);

        TinyDB tinyDB=new TinyDB(getContext());
        ArrayList<String> tags=tinyDB.getListString("Expectations");
        TagContainerLayout tagContainerLayout = root.findViewById(R.id.tagView);
        tagContainerLayout.setTags(tags);

        bio.setText(tinyDB.getString("Bio"));
        name.setText(tinyDB.getString("Name"));
        phone.setText(String.valueOf((tinyDB.getLong("PhoneNo"))));

        Button edit=root.findViewById(R.id.edit_profile);
        edit.setOnClickListener(v -> {
            startActivity(new Intent(getContext(), UpdateProfileActivity.class));
        });

        return root;
    }
}
