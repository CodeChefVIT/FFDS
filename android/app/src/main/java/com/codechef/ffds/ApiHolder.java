package com.codechef.ffds;

import java.util.Map;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.Query;
import retrofit2.http.QueryMap;

public interface ApiHolder {

    @POST("user/create")
    Call<ResponseBody> register(@QueryMap Map<String, String> fields);

    @POST("user/login")
    Call<Token> login(@QueryMap Map<String, String> fields);

    @POST("updateDetails")
    Call<ResponseBody> update(@QueryMap Map<String, String> fields);

    @POST("showDetails")
    Call<User> show(@QueryMap Map<String, String> fields);

    @POST("add/new/chat")
    Call<Chat> addChat(@Body Chat chat);

    @GET("user/profileView")
    Call<ProfileResponse> profileView(@Header("Authorization") String header, @Query("email") String email);

    @POST("user/send/verification/link?mailto=axil.ishan3@gmail.com")
    Call<ResponseBody> sendMail();

    @GET("user/showfeed")
    Call<Feed> showFeed(@Header("Authorization") String header, @Query("gender") String gender, @Query("slot") String slot);

}
