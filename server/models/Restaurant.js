let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ForeignKey = Schema.Types.ObjectId;

let Restaurant = new Schema({
    name: {
        type:String,
        required: true,
        minlength: 3
    },
    
    cuisine: {
        type: String,
        required: true,
        minlength: 3
    },

    review:[
        {type: ForeignKey,
        ref: "Review",
        required: true
        }
    ]

},{timestamps:true});

mongoose.model("Restaurant", Restaurant);