'use strict';
module.exports = (sequelize, DataTypes) => {
    const House = sequelize.define(
        'House',
        {
            name: DataTypes.STRING,
            color: DataTypes.STRING,
            animal: DataTypes.STRING,
            crestImg: DataTypes.STRING,
        },
        {
            scopes: {
                /* 
                Scopes allow us to have default options.
                Here, when use the 'user' scope I won't include 
                the animal, createdAt, or updatedAt columns.
                */
                user: {
                    attributes: {
                        exclude: ['animal','createdAt', 'updatedAt'],
                    },
                },
            },
        }
    );
    House.associate = function (models) {
        // A house has many users
        House.hasMany(models.User, { foreignKey: 'houseId' });
    };
    return House;
};
