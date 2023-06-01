import express from 'express';

const postRouter = express.Router()


postRouter.get('/', (req, res)=>{
     console.log(req.query);
     res.send("Henter all solcreme")
})
postRouter.post('/create', (req, res)=>{
     res.send(`${req.body.Firstname}${req.body.Lastname}
               ${req.body.Email}${req.body.Birthdate}
               ${req.body.Adresse} ${req.body.Stilling}
              ${req.body.Password}
             `);
     console.log('henter alle posters');
})

postRouter.put('/update', (req, res)=>{
     res.send('update alle  poster');
     console.log('Opdater alle posters');
})


postRouter.delete('/delete', (req, res)=>{
     res.send('slet alle  poster');
     console.log('detlete alle posters');
})

export { postRouter }

