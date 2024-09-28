const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db.connect');
const Event = require('./models/event.model');

dotenv.config({
    path:"./.env"
})


connectDB();

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const corsOptions = {
    origin:"*",
    credential:true,
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('meetup backend server is running')
})


// create new event ;

async function createEvent(event){
    try {
        const newEvent = new Event(event);
        const savedEvent = await newEvent.save();
        return savedEvent;
    } catch (error) {
        throw Error('error to create new events',error)
    }
}


app.post('/events', async (req , res) => {
    try {
        const event = await createEvent(req.body);
        if(event){
            res.status(201).json({message:"new event created successfully",newEvent:event})
        }
        else{
            res.status(404).json({error:'event not found'})
        }
    } catch (error) {
        console.log('error to create new event',error)
        res.status(500).json({error:'failed to create new event'})
    }
})

// get all events 

async function getAllEvents(){
    try {
        const events = await Event.find({});
        return events
    } catch (error) {
        throw Error('error to get all events',error)
    }
}

app.get('/events', async (req , res) => {
    try {
        const events = await getAllEvents()
        if(events.length !== 0 ){
            res.status(200).json({message:'get all events',events})
        }
        else{
            res.status(400).json({error:'event not found'})
        }
    } catch (error) {
        console.error('error to fetch all events from db',error),
        res.status(500).json({error:'server error'})
    }
})


// get events by id;

async function getEventById(eventId){
    try {
        const event = await Event.findById(eventId);
        return event
    } catch (error) {
        throw Error('error to get event by Id',error)
    }
}

app.get('/events/:id',async (req, res) => {
    const {id} = req.params;
    try {
        const event = await getEventById(id);

        if(event){
            res.status(200).json({message:'event by id',event})
        }
        else{
            res.status(400).json({error:"event not found"})
        }

    } catch (error) {
        console.error('event failed to get by Id',error)
        res.status(500).json({error:'server error'})
    }
})

const PORT = process.env.PORT || 3000;



app.listen(PORT, ()=>{
    console.log(`server started at http://localhost:${PORT}`)
})