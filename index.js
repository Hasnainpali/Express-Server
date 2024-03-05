const express =require('express');
const app =express()
const cors = require('cors')


app.use(cors());
app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log(`Server are Working port ${process.env.PORT}`)
})

const data = [
    {
        name:"Hasnain",
        id:"2422",
        mode:true
    }
]

app.get('/', (req, res)=>{
    res.status(200).json(data)
})