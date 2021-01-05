'use strict';
module.exports = (sequelize, DataTypes) => {
    const Instructor = sequelize.define(
        'Instructor',
        {
            name: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {}
    );
    Instructor.associate = function (models) {
        // A instructor has many users
        Instructor.hasMany(models.User, {
            foreignKey: 'instructorId',
        });
    };
    return Instructor;
};
