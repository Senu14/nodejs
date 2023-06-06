import express from 'express';
import SongController from '../Controllers/Song.Controller.js';


// Deklarerer var til router
const postRouter = express.Router()

// Deklarerer klasse instans
const song = new SongController()



// Route med GET method - henter
postRouter.get('/post', (req, res) => {
     return song.list(req, res);
     //  res.send('henter alle listen')
    
})

// Route med GET method - henter detaljer
postRouter.get('/post/:id([0-9]*)', (req, res) => {
     return song.details(req,res)
     // res.send('Details of all lists')
})

// Route med POST method - opretter
postRouter.post('/create', (req, res)=>{
     // Henter form body data på res objektet og "sender" (udskriver) til browser
	// Du kan logge req.body og se alle forespørgelsens form data 
     
     res.send(`${req.body.Firstname}${req.body.Lastname}
               ${req.body.Email}${req.body.Birthdate}
               ${req.body.Adresse} ${req.body.Stilling}
              ${req.body.Password}
             `);
     // console.log('henter alle posters');

     // res.send('create alle  song');
     // console.log(song.create());
})

// Route med PUT method - opdaterer
postRouter.put('/update', (req, res)=>{
     res.send('update alle song');
     console.log(song.update);
     
     
})

// Route med DELETE method - Sletter
postRouter.delete('/delete', (req, res)=>{
     res.send('slet alle song');
     console.log(song.delete);
})

export { postRouter }

