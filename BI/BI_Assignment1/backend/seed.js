const connectDB = require('./db/db.connect');
const Event = require('./models/event.model');
const fs = require('fs')


connectDB()
const eventjson = fs.readFileSync("event.json","utf-8");


const eventData = JSON.parse(eventjson);



async function seed(){
    try {
        for(let event of eventData){
            const newEvent = new Event({
                title:event.title,
                host:event.host,
                thumbnail:event.thumbnail,
                details:event.details,
                eventType:event.eventType,
                dressCode:event.dressCode,
                ageRestrictions:event.ageRestrictions,
                location:event.location,
                venue:event.venue,
                tags:event.tags,
                startingTime:event.startingTime,
                endingTime:event.endingTime,
                price:event.price,
                speakers:event.speakers,
                
            })
            const saved = await newEvent.save();

            console.log('saved event',saved.title)
        }
    } catch (error) {
        console.error('error to save ',error)
    }
}

seed()