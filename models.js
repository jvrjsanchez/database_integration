// Inside User model file
User.hasMany(models.Post, { foreignKey: 'userId' });
User.hasMany(models.Comment, { foreignKey: 'userId' });

// Inside Post model file
Post.belongsTo(models.User, { foreignKey: 'userId' });
Post.hasMany(models.Comment, { foreignKey: 'postId' });

// Inside Comment model file
Comment.belongsTo(models.User, { foreignKey: 'userId' });
Comment.belongsTo(models.Post, { foreignKey: 'postId' });
