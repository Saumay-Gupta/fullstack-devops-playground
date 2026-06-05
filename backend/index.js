import express from "express";
import dotenv from 'dotenv'
import connectDB from "./db_connect/connect_db.js";
import userModel from "./model/user.js";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

dotenv.config()
connectDB()

app.post('/api/users', async (req, res) => {
    try {
        const {name} = req.body;
        if(!name) return res.status(404).json({message: 'Name missing'})
        
        await userModel.create(
            {
                'name': name
            }
        )    
        return res.send({message: "Name saved successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
})

app.listen(5000, ()=>{
    console.log('Port listen on 5000');
})