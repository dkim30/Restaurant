let Restaurant = require("mongoose").model("Restaurant");
let Review = require("mongoose").model("Review");


class RestaurantController{

    all(request, response){
        Restaurant.find({}, (err,restaurants)=>{
            if(err) return response.json(err);
            return response.json(restaurants);
        });
    }


    create(request, response){

        Restaurant.findOne({ name: request.body.name }, (err, restaurant)=>{
            if(restaurant){
                return response.json({ errors:{name:{message: "A restaurant with this name already exists"}}});
            }else{
                let restaurant = new Restaurant(request.body);
        
                restaurant.save(err=>{
                    if (err) return response.json(err);
                    return response.json(restaurant);
            });
        }

        })
    }

    findById(request, response){
        Restaurant.findOne({_id: request.params.id},(err,restaurant)=>{
            if(!restaurant) return response.json("Restaurant not found!")
            return response.json(restaurant);
        })
    }

    update(request, response){
        Restaurant.findOne({_id: request.params.id}, (err, restaurant)=>{
            if(!restaurant) return response.json("Restaurant not found!");
            restaurant.name = request.body.name;
            restaurant.cuisine = request.body.cuisine;
        

            restaurant.save(err =>{
                if (err) return response.json(err);
                return response.json(restaurant);
            });

    })
}

    destroy(request, response){
        Restaurant.findOne({_id: request.params.id}, (err, restaurant)=>{
            if(!restaurant) return response.json("Restaurant not found!");
            Restaurant.deleteOne({_id: request.params.id}, (err)=>{
                if (err) return response.json(err);
                return response.json(restaurant);
            });
        })
    
    }

    

}



module.exports = new RestaurantController();