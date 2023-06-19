import express from 'express';
import { sequelize } from '../Config/db.sequelize.js'


const router = express.Router();

import  SongModel  from '../Models/song.model.js';
import  ArtistModel   from '../Models/aritst.model .js';

// Song Routes Begin
router.get('/init', (req, res) => {

try {
     sequelize.sync()
     res.sendStatus(200)

}
catch(err) {
     res.send(err)

}
})

// Song Routes End



export { router };

