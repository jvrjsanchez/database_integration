const sequelize = new sequelize('your_database', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.sync();
