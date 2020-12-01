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
                user: {
                    attributes: {
                        exclude: ['animal', 'createdAt', 'updatedAt'],
                    },
                },
            },
        }
    );
    House.associate = function (models) {
        House.hasMany(models.User, { foreignKey: 'houseId' });
    };
    return House;
};
