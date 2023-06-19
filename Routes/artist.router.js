import express from 'express'
import ArtistController from '../Controllers/artist.controller.js'

const ArtistRouter = express.Router()
// Instatns of ArtistController
const controller = new ArtistController

ArtistRouter.get('/api/artist', (request, response) => {
     console.log('Artist List')
     controller.list(request, response)

})
ArtistRouter.get('/api/artist', (request, response) => {
	console.log('Artist Route detail')
    controller.detail(request, response)
})
ArtistRouter.post('/api/artist', (request, response) => {
     console.log('Artist create')
     controller.create(request, response)

})
ArtistRouter.put('/api/artist', (request, response) => {
	console.log('Artist update')
     controller.update(request, response)
})

export default  ArtistRouter ;