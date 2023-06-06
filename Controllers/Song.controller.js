import db from'../Config/db.config.js'

class SongController {
  constructor() {
     console.log('class SongController instantiated');
  }

//   list = () => {
//      console.log('Kører list metode');
//      return true

  list = (req, res) => {
     const sql =  `SELECT s.id, s.title, a.name  
                   FROM song s 
                   JOIN artist a 
                   ON s.artist_id = a.id 
                   ORDER BY a.name`
db.query(sql, (err, result) => {
if(err) {
console.error(err)
} else {
res.json(result)
}
})
}

  
//   details = () => {
//      console.log('Kører details metode');
//      return true
details = (req, res) => {
     const id = req.params.id
     const sql = `SELECT s.id, s.title, s.content, a.name 
                         FROM song s 
                         JOIN artist a 
                         ON s.artist_id = a.id 
                         WHERE s.id = ? 
                         ORDER BY a.name`
     db.query(sql, [id], (err, result) => {
          if(err) {
               console.error(err)
          } else {
               res.json(result)
          }
     })
}
  create = () => {
     console.log('køre create metode');
     return true
  }



  update = () => {
     console.log('køre update metode');
     return true
  }

  
  delete = () => {
     console.log('køre delete metode');
     return true
  }


}



export default SongController