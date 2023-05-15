import express from "express"
let app =express()

import path from "path"
app.set("views","./views")
app.set ("view engine","hbs")

import bodyParser from "body-parser"
app.use(bodyParser.urlencoded({extended:true}))

app.get("/welcome",(req,res)=>{
    res.render("table")
})

app.get("/welcome1",(req,res)=>{
    res.render("hi")
})


// static page


// app.get("/verify",(req,res)=>{
//     let u=req.query.Username
//     if(u=="Gaurav"){
//         res.sendFile("C:\\Users\\IET\\Desktop\\Wpt_gaurav\\thank.html")
//     }else{
//         res.sendFile("C:\\Users\\IET\\Desktop\\Wpt_gaurav\\10 may\\dynamic\\welcome.html")
//     }
// })


app.post("/veri",(req,res)=>{
    let u=req.body.user1
    let p=req.body.Password
    console.log(u)
    if(u=="Gaurav" && p=="abc"){
        res.render("welcome",{result:u})
    }else{
        let msg="Invalid"
        res.render("hi",{msg})
    }
})


app.get("/tabl",(req,res)=>{
    let u= parseInt(req.query.Table)
    let arr4=[]
    if(isNaN(u)){
        let msg="Enter number first!!!"
        res.render("table",{msg})
    }
    for(let i=1;i<=10;i++){
       
        arr4.push(`${u} * ${i} = ${u*i}`)
    }
    res.render("table",{x:arr4})
})






app.listen(2000,(req,res)=>{
    console.log("Running on 2000 port number")
})