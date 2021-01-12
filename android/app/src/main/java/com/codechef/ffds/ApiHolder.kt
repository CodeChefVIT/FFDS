package com.codechef.ffds

import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.*

val retrofit:Retrofit=Retrofit.Builder().
        addConverterFactory(GsonConverterFactory.create()).
        baseUrl("https://ffds-new.herokuapp.com/").
        build()

interface ApiHolder {
    @POST("user/create")
    fun register(@QueryMap fields: MutableMap<String, String?>): Call<ResponseBody>?

    @POST("user/login")
    fun login(@QueryMap fields: MutableMap<String, String>): Call<Token?>?

    @POST("updateDetails")
    fun update(@QueryMap fields: Map<String?, String?>?): Call<ResponseBody?>?

    @POST("showDetails")
    fun show(@QueryMap fields: Map<String?, String?>?): Call<User?>?

    @POST("add/new/chat")
    fun addChat(@Body chat: Chat?): Call<Chat?>?

    @GET("user/profileView")
    fun profileView(
        @Header("Authorization") header: String?,
        @Query("email") email: String?
    ): Call<ProfileResponse?>?

    @POST("user/send/verification/link?mailto=axil.ishan3@gmail.com")
    fun sendMail(): Call<ResponseBody?>?

    @GET("user/showfeed")
    fun showFeed(
        @Header("Authorization") header: String?,
        @Query("gender") gender: String?,
        @Query("slot") slot: String?
    ): Call<Feed?>?
}

object Api{
    val retrofitService:ApiHolder by lazy {
        retrofit.create(ApiHolder::class.java)
    }
}