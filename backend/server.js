import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())
app.post('/api/contact',(req,res) => {
    const {name,email,message} = req.body;
    console.log('Received:',{name,email,message})
    res.status(200).json({status:'Message received'})
})
const PORT=5000
app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`)
})