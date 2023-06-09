import express from 'express';
import SongController from '../Controllers/Song.Controller.js';


// Deklarerer var til router
const songRouter = express.Router()

// Deklarerer klasse instans
const song = new SongController()



// Route med GET method - henter
songRouter.get('/song', (req, res) => {
     return song.list(req, res);
     //  res.send('henter alle listen')
    
})

// Route med GET method - henter detaljer
songRouter.get('/song/:id([0-9]*)', (req, res) => {
     return song.details(req,res)
     // res.send('Details of all lists')
})

// Route med POST method - opretter
songRouter.post('/song', (req, res)=>{
     // Henter form body data på res objektet og "sender" (udskriver) til browser
	// Du kan logge req.body og se alle forespørgelsens form data 
     return song.create(req, res)
   
})

// Route med PUT method - opdaterer
songRouter.put('/song', (req, res)=>{
     return song.update(req, res)
     // console.log(song.update);
     
     
})

//Route med DELETE method - Sletter
songRouter.delete('/song', (req, res)=>{
    return song.delete(req, res)
})

export default songRouter;

