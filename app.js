//Requiring express
const express = require("express");

//Initialising express
const app = express();

//Using the inbuilt bodyParser
app.use(express.urlencoded());

//Adding a public/static folder
app.use(express.static(__dirname+"/public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})

app.post("/",(req,res)=>{

    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
    
    let nol = req.body.letter;
    let nos = req.body.symbol;
    let non = req.body.number;

    if(nol < 0){
        nol = 0;
    }
    if(nos<0){
        nos = 0;
    }
    if(non<0){
        non = 0;
    }

    password =[]
    for (let index = 0; index < nol; index++) {
        var i = Math.floor(Math.random()*52);
        password.push(letters[i]);
    }
    for (let j = 0; j < nos; j++) {
        var temp = Math.floor(Math.random()*9);
        password.push(symbols[temp]);
    }
    for (let k = 0; k  < nol;k++) {
        var temp = Math.floor(Math.random()*8);
        password.push(numbers[temp]);
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) { 
       
            // Generate random number 
            var j = Math.floor(Math.random() * (i + 1));
                       
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
           
        return array;
    }
    shuffledArray = shuffleArray(password);
    fp = shuffledArray.toString();
    var newfp = fp.replaceAll(",","");
    res.send("Your customised password is : "+ newfp);
})

