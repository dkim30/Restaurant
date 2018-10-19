let Review = require("mongoose").model("Review");


class ReviewController{

    all(request, response){
        Review.find({}, (err,reviews)=>{
            if(err) return response.json(err);
            return response.json(reviews);
        });
    }


    create(request, response){

                let review = new Review(request.body);
        
                review.save(err=>{
                    if (err) return response.json(err);
                    return response.json(review);
            });
        }

}



module.exports = new ReviewController();