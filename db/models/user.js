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
                format: {
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                },
                teachers: {
                    where: {
                        teacher: true,
                    },
                },
                students: {
                    where: {
                        teacher: false,
                    },
                },
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
