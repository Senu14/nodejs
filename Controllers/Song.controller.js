import  SongModel  from "../Models/song.model.js";
import  ArtistModel  from "../Models/aritst.model .js";

ArtistModel.hasMany(SongModel)
SongModel.belongsTo(ArtistModel)

class SongController {
   //class constractor
  constructor() {}
  
  //Song Controller methodes Begin
  list =  async (req, res) => {
   const result = await SongModel.findAll({
      ArtistModel: ['id', 'title'],
      limit: 10,
      order: ['title'],
      include: {
         model: ArtistModel,
         attributes: ['id', 'name' ]
      }
   })
   res.json(result)
  }

details = async (req, res) => {
    const result = await SongModel.findAll({
      where: { id: req.params.id }
    })
    res.json(...result);
  }; 

  create = async (req, res) => {
    const { title, content, artist_id } = req.body;

    if (title && content && artist_id) {
      const model = await SongModel.create(req.body);
      return res.json({ newid: model.id });
    } else {
      res.send(418);
    }
  };

update = async (req, res) => {
   const { title, content, artist_id, id } = req.body;
 

   if(title && content && artist_id && id) {
       const model = await SongModel.update(req.body, { where: { id: id}})
       return res.json({ status: true })
   } else {
       res.send(418)
   }
}

delete = async (req, res) => {
   try{
       await SongModel.destroy({ where: { id: req.params.id }})
       res.sendStatus(200)
   }
   catch(err) {
       res.send(err)
   }
}
  //Song Controller methodes End

}

  
   

 




export default SongController