import ArtistModel from "../Models/aritst.model .js"


/**
	 * Method list - henter alle records
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */


// Controller for Artists
 
class ArtistController {
     // class constructor

	constructor() {
		// console.log("Artist Controller is fired");
	}


list = async (req, res) => {
          const orderby = [req.query.orderby || 'id']
          orderby.push (req.query.dir || 'ASC')
          const limit = req.query.limit || 1000
          const result = await ArtistModel.findAll({
               order:[orderby],
              limit: Number(limit)
     })
		res.json(result)
	}
detail = async (req, res) => {
		     const result = await ArtistModel.findAll({
			where: { id: req.params.id },
			include: SongModel,
	});
		res.json(...result);
	}
create = async (req, res) => {
	const { id, name } =req.body;
	if  (id && name) { 
		const model = await ArtistModel.create (req.boody)
		return res.json({ newId: model.id});
	}else{
		res.send(418);

	}

}
};
	
       

export default ArtistController;

