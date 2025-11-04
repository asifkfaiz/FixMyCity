const mongoose =require('mongoose')

const notificationSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Users',
        },
        type:{
            type:String
        },
        reportId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Reports'
        },message:{
            type:String
        },isRead:{
            type:Boolean
        },createdAt:{
            type:Date
        },link:{
            type:String
        }

    }
)

module.exports=mongoose.model("Notifications",notificationSchema)