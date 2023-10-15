const express = require("express")
const fs = require("node:fs")
const app = express()
const dataSet = []

if(fs.existsSync("./data/data.json")){
  const existingData = fs.readFileSync("./data/data.json", "utf-8")
  dataSet.push(...JSON.parse(existingData))
}

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended : true }));
app.get("/", function(req,res){
  res.render("index.ejs", { dataSet })
  // res.render("index.pug", { dataSet })
})

app.post("/", (req,res) =>{
  const newData = {
    htitle : req.body.htitle,
    hfname : req.body.hfname,
    hlname : req.body.hlname,
    hpower : req.body.hpower,
    hcity : req.body.hcity
  }
  dataSet.push(newData)
  console.log(newData)
  fs.writeFileSync("./data/data.json", JSON.stringify(dataSet, null, 2), "utf-8");
  console.log("The data is addeded to the json file")
  res.redirect("/")
})


app.listen(2200, "localhost", function(err){
  if(err){
    console.log("error", err)
  }
  else{
    console.log("The  server is runnig on localhost:2200")
  }
})
