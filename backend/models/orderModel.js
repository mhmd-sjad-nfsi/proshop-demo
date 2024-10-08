import mongoose from "mongoose";
import Product from "./productModel";

const orderSchema= mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    orderItems:[
        {
            name:{type:String,required:true},
            qyt:{type:Number,required:true},
            image:{type:String,required:true},
            price:{type:Number,required:true},
            Product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product",
            },


        }
    ],
    shippingAdderss:{
        address:{type:String,required:true},
        city:{type:Number,required:true},
        postalCode:{type:String,required:true},
        country:{type:Number,required:true},
    },
    paymentMethod:{
        type:String,
        required:true
    },
    paymentResult:{
        id:{type:String},
        status:{type:Number},
        update_time:{type:String},
        email_address:{type:Number},
    },
    itemsPrice:{ 
        type:Number,
        required:true,
        default:0.0,
    },
    taxPrice:{ 
        type:Number,
        required:true,
        default:0.0,
    },
    shippingPrice:{ 
        type:Number,
        required:true,
        default:0.0,
    },
    totalPrice:{ 
        type:Number,
        required:true,
        default:0.0,
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false,
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false,
    },
    DeliveredAt:{
        type:Date
    },
},{
    timestamps:true,
});

const Order =mongoose.model("Order",orderSchema);
export default Order