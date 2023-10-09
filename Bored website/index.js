import express, { response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const request =  req.body;
  const type = request.type
  const parts = request.participants
      console.log(
				`https://bored-api.appbrewery.com/filter?type=${type}&participants=${parts}`
			)
  try{
    const reponse = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${parts}`);
    const len = reponse.data.length;
    const random = Math.random()*len;
    const input = reponse.data[parseInt(random)]
    res.render("index.ejs", {
			data: input,
		})
  }
  catch(err){
    console.log("Error in fetching the request from the server"+ err.message);
    res.render("index.ejs",{
        message: "The activity is not found."
    })
  }

});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
