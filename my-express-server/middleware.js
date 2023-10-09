// this is my custom middleware.


const middle = (req,res,next)=>{
    console.log("The request method is " + req.method);
    next();
    
}


export default middle;