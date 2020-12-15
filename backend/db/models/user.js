'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            /* 
                Gryffindor: 1    
                HufflePuff: 2
                Ravenclaw: 3
                Slytherin: 4
            */
            houseId: DataTypes.INTEGER,
            teacher: DataTypes.BOOLEAN,
        },
        {}
    );
    User.associate = function (models) {
        // A user belongs to a house
        User.belongsTo(models.House, {
            foreignKey: 'houseId',
        });
    };
    return User;
};
