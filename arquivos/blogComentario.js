const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Blog = require('./blogTabela');

const Comentario = sequelize.define('Comentario', {
  comentario_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  comentario: {
    type: DataTypes.STRING(200),
    allowNull: false
  },


  publicacao_id: {
    type: DataTypes.INTEGER,
    allowNull: false, 

    references: {
      model: Blog,
      key: 'id'
    }
    
  }, 
  criado: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
},
  {
    timestamps: false // Habilitar timestamps automáticos
  });

Blog.hasMany(Comentario, { foreignKey: 'publicacao_id' });
Comentario.belongsTo(Blog, { foreignKey: 'publicacao_id', as: 'Blogs' });

module.exports = Comentario;
