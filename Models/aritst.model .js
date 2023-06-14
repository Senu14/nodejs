
import { sequelize } from "../Config/db.sequelize.js";
import { Model, DataTypes } from "sequelize";

class ArtistModel extends Model {}

     ArtistModel.init({
          id: {
               type: DataTypes.INTEGER,
               autoIncremnt: true,
               allowMull: false,
               primaryKey: true
          },
          name: {
               type: DataTypes.STRING,
               allowNull: false,
               defaultValue: 'Untitled'
          },
         
          
     }, {
          sequelize,
          modelName: 'artist',
          freezeTableName: true,
          underscored: true

     })

     export  { ArtistModel };
