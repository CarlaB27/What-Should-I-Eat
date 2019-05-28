

module.exports = {
    index(req, res, next) {
        res.render("static/index", { title: "What Should I Eat?" });
    }
}


//const unirest = require('unirest');

// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar")//TODO: INPUT BOX
// .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
// .header("X-RapidAPI-Key", "a509516b83msh593f961864e03c9p171205jsn484cbe1ef741")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });