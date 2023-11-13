import express from 'express'
import diaryRoutes from "./routes/diaries.router"


const app = express()

app.use(express.json()) //middleware que transforma la req.body a un json

const PORT = 3000;
app.use("/api/diaries" , diaryRoutes)
app.get('/ping' , (_req,res) => {
    console.log("someone pinged here !!")
    res.send("pong")
})



app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
    
})
