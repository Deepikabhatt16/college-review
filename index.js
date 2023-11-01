import express from "express";
//import morgan from "morgan";
var result="successfully submitted";
 import {fileURLToPath}from "url";
import {dirname} from "path";
import bodyParser from "body-parser";
const __dirname=dirname(fileURLToPath(import.meta.url));
const port=3000;
const app= express();
app.use(bodyParser.urlencoded({extended:true}));
function middleware(req,res,next){

    console.log("request method:",req.method);
    console.log("request url:",req.url);
    next();
}
app.use(middleware);
app.get("/" ,(req,res)=>{ 
      res.sendFile(__dirname+"/static/index.html");    
});
app.post("/login",(req,res)=>{
//    console.log(req.body);
res.sendFile(__dirname+"/static/index1.html");
});
  //app.use(morgan("combined"));
app.listen(port,()=>{
    console.log("serving on port = "+port);
})