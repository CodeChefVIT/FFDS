
var db={
    mongoDB:process.env.MONGO_DB || process.env.MONGODB,
    email:process.env.email|| process.env.username,
    pass:process.env.password || process.env.pword
}
module.exports=db