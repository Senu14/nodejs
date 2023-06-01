import express from 'express';

const postRouter = express.Router()


postRouter.get('/post', (req, res)=>{
     console.log('Hent alle  poster');
})

export { postRouter }

