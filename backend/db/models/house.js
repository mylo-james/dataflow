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
        {}
    );
    House.associate = function (models) {
        // A house has many users
        House.hasMany(models.User, {
            foreignKey: 'houseId',
        });
    };
    return House;
};
