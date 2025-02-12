
import { sequelize } from "../Config/db.sequelize.js";
import { Model, DataTypes } from "sequelize";

class SongModel extends Model {}

     SongModel.init({
          id: {
               type: DataTypes.INTEGER,
               autoIncremnt: true,
               allowMull: false,
               primaryKey: true
          },
          title: {
               type: DataTypes.STRING,
               allowNull: false,
               defaultValue: 'Untitled'
          },
          content: {
               type: DataTypes.TEXT,
               allowNull: true
          },
          artist_id: {
               type: DataTypes.INTEGER,
               allowNull: false

          }
     }, {
          sequelize,
          modelName: 'song',
          freezeTableName: true,
          underscored: true,
          // createdAt: 'created',
          // updatedAt: false

     })

     export default SongModel;
