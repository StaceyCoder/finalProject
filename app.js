const ejs = require('ejs')
const RapidAPI = new require('rapidapi-connect')
const rapid = new RapidAPI('default-application_5af66d29e4b04378340233b1', '451f2b12-40c0-4bb3-a75c-2a0433be73ca')
const unirest = require('unirest')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// rapid.call('NasaAPI', 'getPictureOfTheDay', {
//   'X-Mashape-Key', 'XXXXX'
//   'X-Mashape-Host', 'spoonacular-recipe-food-nutrition-v1.p.mashape.com'
// });

var food;

// just added
// var i;

// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/videos/search?query=" + {foodSearch} + "&minLength=0&maxLength=999&offset=0&number=10")

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/videos/search?query=smoothie&minLength=0&maxLength=999&offset=0&number=10")
.header("X-Mashape-Key", "XXXXX")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.mashape.com")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  food = result.body.videos[8].youTubeId;
  // just added
  // for (var i = 0; i < food.length; i++){

//  }

});

app.get('/smoothie', (req, res)=>{
  return res.render('smoothie', {food})
})


// app.get('/', (req, res)=>{
//   return res.send()
// })


// --- download bodyParser
// --- req.body

// app.post('/food', (req, res)=>{
//   res.send(food)
// })


app.listen(PORT, ()=>{
  console.log("Smoothie is running...")
})
