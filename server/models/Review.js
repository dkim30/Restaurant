let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

let Review = new Schema({
    yourName: {
        type:String,
        required: true,
        minlength: 3
    },

    stars:{
        type: Number,
        required: true
    },
    
    description: {
        type: String,
        required: true,
        minlength: 3
    },

    restaurant:{
        type:ForeignKey,
        ref: "Restaurant"
    }

},{timestamps:true});

mongoose.model("Review", Review);