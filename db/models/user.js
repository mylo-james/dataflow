'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            name: DataTypes.STRING,
            houseId: DataTypes.INTEGER,
            teacher: DataTypes.BOOLEAN,
        },
        {
            scopes: {
                /* 
                Scopes allow us to have default options.
                Here, when use the 'house' scope, I'll include the house alias,
                and I won't include the houseId, createdAt, or updatedAt columns.
                */
                house: {
                    include: 'house',
                    attributes: {
                        exclude: ['houseId', 'createdAt', 'updatedAt'],
                    },
                },
            },
        }
    );
    User.associate = function (models) {
        // A user belongs to a house
        User.belongsTo(models.House.scope('user'), {
            foreignKey: 'houseId',
            as: 'house',
        });
        User.belongsToMany(models.Course, {
            through: models.Enrollment,
            foreignKey: 'userId',
            as: 'Enrollments',
        });
    };
    return User;
};
