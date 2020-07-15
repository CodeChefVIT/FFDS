package com.codechef.ffds;

import java.util.Map;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.POST;
import retrofit2.http.QueryMap;

public interface ApiHolder {

    @POST("register")
    Call<ResponseBody> register(@QueryMap Map<String, String> fields);

    @POST("login")
    Call<ResponseBody> login(@QueryMap Map<String, String> fields);

    @POST("updateDetails")
    Call<ResponseBody> update(@QueryMap Map<String, String> fields);

    @POST("showDetails")
    Call<User> show(@QueryMap Map<String, String> fields);
}
