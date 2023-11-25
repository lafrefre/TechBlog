const fs = require('fs');
const path = require('path');
const {Sequelize} = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.development);

const models = {};

fs.readdirSync(__dirname)
        .filter((file) => file !== 'index.js')
        .forEach((file) => {
            const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
            models[model.name] = model;
        });

    Object.keys(models).forEach((modelName) => {
        if ('associate' in models[modelName]) {
            models[modelName].associate(models);
        }
    });

    models.sequelize = sequelize;
    models.Sequelize = Sequelize;

    fs.readdirSync(__dirname);
    fs.readdirSync(__dirname)
        .forEach((file) => {
            const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
            models[model.name] = model;
        });

    module.exports = models;


// const models = {};

// fs.readdirSync(__dirname)
//     .filter(file => file !== 'index.js')
//     .forEach(file => {
//         const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//         models[model.name] = model;
//     });

Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
}
);

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

