import express from 'express'
import  Router from "express"
let guest= Router()
export default guest




guest.use(express.json());
let arr1=[]
guest.post("/addguest",(req,res)=>{
    let user=req.query.n1.toLowerCase()
    arr1.push(user)
    res.send(arr1)
})

let username="Gaurav"
guest.get("/",(req,res)=>{
    res.send(`Hi my name is ${username}`)
})


//show names of arr in list
guest.get("/showlist",(req,res)=>{
    let ans=arr1.map((value,index)=>`${index}  ${value}`)
    res.send(ans)

})

// used for counting guest
guest.get("/count",(req,res)=>{
     let cou=arr1.length
     //check why we cant send direct variable to res.send(cou) 
        res.send(`${cou}`)
})


// change name is array
guest.put("/changename/:name/:newname",(req,res)=>{
    let orgnl=req.params.name.toLowerCase()
    
     let newName=req.params.newname.toLowerCase()
     
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]==orgnl){
            arr1[i]=newName
            break;
        }
        else if(i==arr1.length-1){
            res.send("Name not found")
        }
    }
     res.send(arr1)

})

// to delete the element from array
guest.delete("/delete/:name",(req,res)=>{
//  let ah=arr1.length
    let change=req.params.name.toLowerCase()
    // for(let i=0;i<ah;i++){
    //     if(arr1[i]==change){
    //        arr1.splice(i,1)
           
    //        console.log(i)
    //     }
     
    // }
    res.send(arr1)
})

















