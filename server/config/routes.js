let path = require("path");
let RestaurantController = require("../controllers/RestaurantController");
let ReviewController = require("../controllers/ReviewController");

module.exports = (app)=>{
    app.get("/api/restaurants",RestaurantController.all);
    app.post("/api/restaurants",RestaurantController.create);
    app.get("/api/restaurants/:id",RestaurantController.findById);
    app.patch("/api/restaurants/:id",RestaurantController.update);
    app.delete("/api/restaurants/:id", RestaurantController.destroy);

    app.post("/api/reviews", ReviewController.create);
    app.get("/api/reviews/:id", ReviewController.all);


    app.all("*", (request, response, next) =>{
        response.sendFile(path.resolve("../client/dist/client/index.html"));
    });

} 