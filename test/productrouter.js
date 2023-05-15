import express from "express"
import Router from "express"
let product = Router()
export default product


product.use(express.json());
let arr2=[{
    "ProductID": "1",
    "productName" : "AAA",
    "costPerUnit": 30,
    "units": 2
}]


// add elemet in id
product.post("/add",(req,res)=>{
        let ans=req.body
        arr2.push(ans)
        res.send(arr2)
})


// GET PRODUCT BY ID
product.get("/getInfo",(req,res)=>{
    let id=req.query.ID
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]["ProductID"]==id){
                res.send(arr2[i])
                break;
        }else if(i==arr2.length-1){
                res.send("product not found")
        }
    }
})



//show array
product.get("/show",(req,res)=>{
        res.send(arr2)
})


//change cost 
product.put("/changecost/:i/:cost",(req,res)=>{
        let id= req.params.i
        let c= req.params.cost
        for(let q=0;q<arr2.length;q++){
                if(arr2[q]["ProductID"]==id){
                        arr2[q]["costPerUnit"]=c
                        res.send(arr2)
                        break;
                }else if(q==arr2.length-1){
                        res.send("product not found")
                }
        }
})



// remove product from array
product.delete("/delete/:i",(req,res)=>{
        let id=req.params.i
        for(let q=0;q<arr2.length;q++){
               if(arr2[q]["ProductID"]==id){
                       arr2.splice(q,1)
                       res.send(arr2)
                       break;
               } else if(q==arr2.length-1){
                        res.send("Product not found")
               }
        }
})




