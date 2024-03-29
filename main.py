from flask import Flask
from yourapplication import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///yourdatabase.db'
db.init_app(app)

with app.app_context():
    db.create_all()
