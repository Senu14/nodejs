import express from 'express';
import SongController from '../Controllers/Song.Controller.js';


// Deklarerer var til router
const songRouter = express.Router()

// Instans (forekomst) of class SongController
const controller= new SongController()



// Route Routes Begin
songRouter.get('/api/song', (req, res) => {controller.list(req, res) })
songRouter.get('api//song/:id([0-9]*)', (req, res) => {controller.get(req, res) })
songRouter.get('api//song/', (req, res) => {controller.create(req, res) })
songRouter.get('api//song/', (req, res) => {controller.update(req, res) })
songRouter.get('api//song/:id([0-9]*)', (req, res) => {controller.delete(req, res) })




// Route Routes End
export { songRouter };

