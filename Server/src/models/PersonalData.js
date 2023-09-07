const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
	sequelize.define('PersonalData', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			}
		},
		numberPhone: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		ubication: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		linkedin: {
			type: DataTypes.STRING,
		},
		instagram: {
			type: DataTypes.STRING,
		},
		gitHub: {
			type: DataTypes.STRING,
		}
	})
};