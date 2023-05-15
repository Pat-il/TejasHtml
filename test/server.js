import express from "express"
import guest from "./guestrouter.js"
let app= express()
import product from "./productrouter.js"

// used guest obj to call
app.use("/athiti",guest)
app.use("/product",product)

app.get("/",(req,res)=>      
{
    res.send("dont give any more errors")
})

app.get("/add",(req,res)=>{
    let num1=parseInt(req.query.n1)
    let num2=parseInt(req.query.n2)
    res.send(`The sum of ${num1} + ${num2} = ${num1+num2}`)
})
let arr=[]
app.use(express.json());
app.post("/array",(req,res)=>{
    
    let user=req.body;
    
    arr.push(user)
   // res.send(fetch)
    console.log(user)
    res.send(arr)
})


// path parameter
app.put("/factorial/:num",(req,res)=>{
    let n =req.params.num
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact *i
    }
    res.send(`factorial of ${n} is ${fact}`)
})







// port listening

app.listen(5000,()=>{
        console.log("port 5000 listening")
})