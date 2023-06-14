import { SongModel } from "../Models/song.model.js";

class SongController {
   //class constractor
  constructor() {}
  
  //Song Controller methodes Begin
  list =  async (req, res) => {
   const result = await SongModel.findAll({
      limit: 1
   })
   res.json(result)
  }

  //Song Controller methodes End

}

  
   

 




export default SongController