package com.codechef.ffds

import java.io.Serializable

data class User(
    val name:String,
    val email:String,
    val bio:String
)

data class Chat(
    val email:String,
    val with:String,
    val name:String,
    val msg:String,
    val time:String
)

data class Profile(

    val verified : Boolean,
    val branch : String,
    val gender : String,
    val bio : String,
    val year : Int,
    val expectations : List<String>,
    val slot : String,
    val _id : String,
    val name : String,
    val email : String,
    val password : String,
    val phone : Long,
    val chat : List<String>,
    val __v : Int,
    val rand : Int
):Serializable

data class ProfileResponse (

    val message : String,
    val user : Profile
)

data class Token(
    val token:String
)

data class Feed(
    val message: String,
    val payload: ArrayList<Profile>
)

data class Messages(
    val lastMessage: String,
    val profileImage: Int,
    val name:String
)