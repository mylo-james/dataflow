'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            houseId: DataTypes.INTEGER,
        },
        {}
    );
    User.associate = function (models) {
        User.belongsTo(models.House, { foreignKey: 'houseId' });
        User.belongsToMany(models.Course, {
            through: 'enrollments',
            foreignKey: 'userId',
            otherKey: 'courseId',
        });
    };
    return User;
};
