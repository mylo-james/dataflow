'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            instructorId: DataTypes.INTEGER,
            projectName: DataTypes.STRING,
            liveLink: DataTypes.STRING,
            repoLink: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {}
    );
    User.associate = function (models) {
        // A user belongs to a instructor
        User.belongsTo(models.Instructor, {
            foreignKey: 'instructorId',
        });
    };
    return User;
};
