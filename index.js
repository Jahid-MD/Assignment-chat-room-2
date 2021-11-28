const express=require("express")
const app=express()
const port = 8080;

app.use(express.json());

app.post("/register",(req,res)=>{
    console.log(req.body)
    const data=req.body;
    const recData=Object.keys(data)
    console.log(recData)
    let isValid;
    const reqData=["name","email","password"]
    for(let i=0;i<reqData.length;i++){
        if(recData.includes(reqData[i])){
            isValid=true
        }
        else{
            isValid=false;
        }
    }
    if(isValid==true){
        res.status(200).send("User Registered")
    }
    else{
        res.send("Please provide all details")
    }
   
})

app.listen(port , () => {
    console.log(`server starting running on port ${port}`)
}   )