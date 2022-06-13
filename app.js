
const express= require ( "express");
const morgan = require("morgan")

const tourRouter = require("./routes/tourRoutes")
const userRouter = require("./routes/userRoutes")

const app = express()

console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))

}
//1) MIDDLEWARES
app.use(express.json())
app.use(express.static(`${__dirname}/public`))


// app.get("/", (req, res)=>{
//     res.status(200).json({message:"Hello from ss!", app:"Natours"})
// })



//2) controllers



//3) router


app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)




// app.get("/api/v1/tours/:id", (req,res)=>{

//     const id = req.params.id *1
//     const tour = tours.find( el=> el.id === id)

//     if(!tour){
//         return res.status(404).json({
//             status:"fail",
//             message:"Invalid id"
//         })
//     }
//     res.status(200).json({
//         status: "success",
//         data:{
//             tour
//         }
//     })
// })

// app.patch("/api/v1/tours/:id", (req, res)=>{
//     if(req.params.id *1 > tours.length){
//         return res.status(404).json({
//             status:"fail",
//             message:"Invalid id"
//         })
//     }
//     res.status(200).json({
//         status: "success",

//     })
// })
// app.delete("/api/v1/tours/:id", (req, res)=>{
//     if(req.params.id *1 > tours.length){
//         return res.status(404).json({
//             status:"fail",
//             message:"Invalid id"
//         })
//     }
//     res.status(204).json({
//         status: "success",
//         data : null
//     })
// })

// app.post("/api/v1/tours", (req, res)=>{
//     // console.log(req.body)
//     const newId = tours[tours.length -1].id + 1;
//     const newTour = Object.assign({id: newId}, req.body)
//     tours.push(newTour)
//     fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err=>{
//         res.status(201).json({
//             status:"success",
//             data:{
//                 tour: newTour
//             }
//         })
//     })
// })
module.exports = app;
